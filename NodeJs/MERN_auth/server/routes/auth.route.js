const express = require("express");
const passport = require("passport");
const auth = require("../middlewares/auth.middleware");

const {
  handleRegister: register,
  handleLogin: login,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/protected", auth.authenticate(), (req, res) => {
  res.json({ message: "Protected Route" });
});

module.exports = router;
