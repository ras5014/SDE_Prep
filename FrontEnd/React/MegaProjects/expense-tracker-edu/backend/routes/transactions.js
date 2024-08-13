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

router.get("/getTransaction/:type/:id", async (req, res) => {
  const { type, id } = req.params;

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

router.post("/getAllTransactions", async (req, res) => {
  const { userId, type } = req.body;
  try {
    const db = admin.firestore();
    const collectionName = type === "income" ? "income" : "expense";

    const transactionsRef = db.collection(collectionName);
    const querySnapshot = await transactionsRef
      .where("userId", "==", userId)
      .get();
    const userTransactions = querySnapshot.docs.map((doc) => ({
      formId: doc.id,
      ...doc.data(),
    }));
    res.status(200).json({ success: true, userTransactions });
  } catch (err) {
    console.error("Error Getching Data: ", err);
    res.status(500).json({ success: false });
  }
});

router.put("/editTransaction", async (req, res) => {
  const { type, id, transactionData } = req.body;

  try {
    const firestore = admin.firestore();
    const collectionName = type === "income" ? "income" : "expense";

    await firestore.collection(collectionName).doc(id).update(transactionData);

    res.json({ success: true });
  } catch (error) {
    console.error("Error updating transaction data:", error);

    res.status(500).json({ success: false });
  }
});

// Route to delete a transaction by ID
router.delete("/deleteTransaction/:type/:id", async (req, res) => {
  const { type, id } = req.params;

  try {
    const firestore = admin.firestore();
    const collectionName = type === "income" ? "income" : "expense";
    await firestore.collection(collectionName).doc(id).delete();

    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting transaction:", error);

    res.status(500).json({ success: false });
  }
});
module.exports = router;
