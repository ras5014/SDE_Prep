const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const signup = async (name, email, password) => {
  const userDetails = {
    name,
    email,
    password,
  };
  await User.create(userDetails);
  return;
};
