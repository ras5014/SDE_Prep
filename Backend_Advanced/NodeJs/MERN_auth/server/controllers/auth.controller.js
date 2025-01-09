const {
  authenticate,
  create,
  find,
  fetchAllUser,
} = require("../services/auth.service");

const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await create({ name, email, password });
    res.status(200).json({ message: "User Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    // console.log(error.message);
    // next(error);
  }
};

const handleLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await find(email);
    if (!user) {
      throw new Error("User not found");
    }
    const { token } = await authenticate({ email, password });
    const allUser = await fetchAllUser();
    res.status(200).json({ token, allUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleRegister, handleLogin };
