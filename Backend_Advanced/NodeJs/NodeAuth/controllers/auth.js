const { pg } = require("../dbConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUserExists = await pg.raw(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    );
    if (checkUserExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Make hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    await pg.raw(`INSERT INTO users (email, password) VALUES (?, ?)`, [
      email,
      hashedPassword,
    ]);
    res.status(201).json({ message: "User created successfully" });
    next();
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await pg.raw(`SELECT * FROM users`);
    res.status(200).json(users.rows);
    next();
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await pg.raw(`SELECT * FROM users WHERE email = ?`, [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const id = user.rows[0].id;
    const hashedPassword = user.rows[0].password;
    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
    if (isPasswordCorrect) {
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: 24 * 60 * 60,
      });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    next(error);
  }
};

module.exports = { signUp, getUsers, login };
