const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const budgetRoutes = require("./budget");
const reportsRoutes = require("./reports");
const transactionRoutes = require("./transactions");

router.use("/api/v1", authRoutes);
router.use("/api/v1", budgetRoutes);
router.use("/api/v1", reportsRoutes);
router.use("/api/v1", transactionRoutes);

module.exports = router;
