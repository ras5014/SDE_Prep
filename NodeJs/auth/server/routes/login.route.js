const express = require("express");
const { login, signup, getAllUser } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/getalluser", getAllUser);

module.exports = router;
