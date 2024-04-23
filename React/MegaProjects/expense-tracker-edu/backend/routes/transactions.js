const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/addTransaction", async (req, res) => {
  const { type, transactionData, userId } = req.body;

  try {
    const db = admin.firestore();
    const collectionName = type === "income" ? "income" : "expense";
    await db.collection(collectionName).add({
      ...transactionData,
      userId: userId,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.get("/getTransaction", async (req, res) => {
  const { type, id } = req.query;

  try {
    const db = admin.firestore();
    const collectionName = type === "income" ? "income" : "expense";
    const transactionDoc = await db.collection(collectionName).doc(id).get();

    if (transactionDoc.exists) {
      const transactionData = transactionDoc.data();
      res.status(200).json({ success: true, transaction: transactionData });
    } else {
      console.error("Couldn't find transaction");
      res.status(404).json({ success: false });
    }
  } catch (err) {
    console.error("Error Getching Data: ", err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
