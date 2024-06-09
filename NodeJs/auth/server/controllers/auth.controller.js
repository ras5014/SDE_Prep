const db = require("../dbconfig");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { username, password } = req.body;
  // Validation Check
  if (!username || !password) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }
  // Database Check
  try {
    const results = await db.raw(`SELECT * FROM users WHERE username = ?`, [
      username,
    ]);
    if (results.rows.length === 0) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }
    const user = results.rows[0];
    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    return res.status(200).json({
      message: "Login Successful",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login Failed",
      error: `${error}`,
    });
  }
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  // Validation Check
  if (!username || !password) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }
  // Inserting to Databse
  const hashedPassword = bcrypt.hashSync(password, 8);
  try {
    const results = await db.raw(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [username, hashedPassword]
    );
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "User Creation Failed",
      error: `${error}`,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const results = await db.raw(`SELECT * FROM users`);
    return res.status(200).json({
      message: "All Users",
      data: results.rows,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get users",
      error: `${error}`,
    });
  }
};

const googleLogin = async (req, res) => {};

module.exports = {
  login,
  signup,
  getAllUser,
};
