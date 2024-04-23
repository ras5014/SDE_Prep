const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/saveBudget", (req, res) => {
  res.json({ message: "Budget saved successfully" });
});
