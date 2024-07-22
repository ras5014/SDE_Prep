const express = require("express");
const router = express.Router();

const { signUp, getUsers, login } = require("../controllers/auth");

const { authenticate } = require("../middlewares/auth");

router.post("/signup", signUp);
router.get("/users", authenticate, getUsers);
router.post("/login", login);

module.exports = router;
