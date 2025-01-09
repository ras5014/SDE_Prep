require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const create = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  return user.save();
};

const authenticate = async ({ email, password }) => {
  const user = await find(email);
  const isPasswordmatch = await bcrypt.compare(password, user.password);
  if (!isPasswordmatch) {
    throw new Error("Invalid Credentials");
  }
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token };
};

const find = async (email) => {
  return User.findOne({ email });
};

const fetchAllUser = async () => {
  return User.find({});
};

module.exports = { create, authenticate, find, fetchAllUser };
