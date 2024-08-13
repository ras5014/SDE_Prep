import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
require("dotenv").config();

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    // console.log(payload);
    next();
    return;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

export const hashedPassword = (password) => {
  return bcrypt.hash(password, 10);
};
