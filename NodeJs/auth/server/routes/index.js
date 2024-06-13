const express = require("express");
const router = express.Router();

const loginRoute = require("./login.route");

router.use("/api/v1", loginRoute);

module.exports = router;
