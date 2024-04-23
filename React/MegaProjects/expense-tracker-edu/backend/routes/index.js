const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const budgetRoutes = require("./budget");

router.use("/api/v1", authRoutes);
router.use("/api/v1", budgetRoutes);

module.exports = router;
