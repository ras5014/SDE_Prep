const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/saveBudget", async (req, res) => {
  const { budgetData, userId } = req.body;

  try {
    // Add the userId field to the formData object
    budgetData.userId = userId;

    const firestore = admin.firestore();
    const budgetCollectionRef = firestore.collection("budget");

    // Query the documents based on userId and get the first matching document
    const querySnapshot = await budgetCollectionRef
      .where("userId", "==", userId)
      .limit(1)
      .get();

    let budgetDataRef;

    if (querySnapshot.empty) {
      // If no document matches userId, create a new document with a random document ID
      budgetDataRef = budgetCollectionRef.doc();
    } else {
      // If a document matches userId, use the first matching document
      budgetDataRef = querySnapshot.docs[0].ref;
    }

    // Save or update the form data in Firestore
    await budgetDataRef.set(budgetData, { merge: true });

    // Send a success response to the frontend
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving budget data:", error);
    // Send an error response to the frontend
    res.status(500).json({ success: false });
  }
});

router.post("/getBudget", async (req, res) => {
  const { userId } = req.body;
  try {
    const db = admin.firestore();
    const budgetRef = db.collection("budget");

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
