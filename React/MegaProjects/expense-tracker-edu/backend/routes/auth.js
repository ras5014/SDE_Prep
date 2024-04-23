const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/google-signin", (req, res) => {
  try {
    const { idToken } = req.body;
    const decodedToken = admin.auth().verifyIdToken(idToken);
    req.status(200).json({ success: true });
  } catch (err) {
    res.status(401).json({ success: false });
  }
});

module.exports = router;
