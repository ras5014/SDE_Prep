const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/saveBudget", async (req, res) => {
  const { budgetData, userId } = req.body;

  try {
    budgetData.userId = userId;
    const db = admin.firestore();
    const budgetRef = db.collection("budgets");
    const querySnapshot = await budgetRef
      .where("userId", "==", userId)
      .limit(1)
      .get();
    let budgetData;
    if (querySnapshot.empty) {
      budgetData = budgetRef.doc();
    } else {
      budgetData = querySnapshot.docs[0].ref;
    }
    await budgetData.set(budgetData, { merge: true });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error saving budget data: ", err);
    res.status(500).json({ success: false });
  }
});

router.post("/getBudget", async (req, res) => {
  const { userId } = req.body;
  try {
    const db = admin.firestore();
    const budgetRef = db.collection("budgets");

    const budgetDataSnapshot = await budgetRef
      .where("userId", "==", userId)
      .limit(1)
      .get();

    if (!budgetDataSnapshot.empty) {
      const budgetData = budgetDataSnapshot.docs[0].data();
      res.status(200).json({ success: true, budgetData });
    } else {
      const budgetData = {
        groceries: 0,
        health: 0,
        transport: 0,
        accommodation: 0,
        gift: 0,
        other: 0,
      };
      res.status(200).json({ success: true, budgetData });
    }
  } catch (err) {
    console.error("Error getting budget data: ", err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
