const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/google-signin", async (req, res) => {
  try {
    const { idToken } = req.body;
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { name, email, picture, uid } = decodedToken;
    res.status(200).json({
      success: true,
      user: { name: name, email: email, picture: picture, uid: uid },
    });
  } catch (err) {
    console.error("Error verifying Google Sign-In token:", err);
    res.status(401).json({ success: false });
  }
});

module.exports = router;
