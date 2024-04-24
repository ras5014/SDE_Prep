const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

const fetchBudget = async (userId) => {
  const db = admin.firestore();
  const budgetCollectionRef = db.collection("budgets");

  try {
    const budgetSnapshot = await budgetCollectionRef
      .where("userId", "==", userId)
      .get();
    if (!budgetSnapshot.empty) {
      return budgetSnapshot.docs[0].data();
    } else {
      const budgetData = {
        groceries: 0,
        health: 0,
        transport: 0,
        accommodation: 0,
        gift: 0,
        other: 0,
      };
      return budgetData;
    }
  } catch (err) {
    console.log("Error getting budget data: ", err);
  }
};

const fetchTransactions = async (userId, type, startDate, endDate) => {
  const db = admin.firestore();
  const collectionName = type === "income" ? "income" : "expense";
  const transactionCollectionRef = db.collection(collectionName);

  try {
    const transactionSnapshot = await transactionCollectionRef
      .where("userId", "==", userId)
      .where("date", ">=", startDate)
      .where("date", "<=", endDate)
      .get();
    const transactions = transactionSnapshot.docs.map((doc) => doc.data());

    const transactionsByCategory = {};
    let totalAmount = 0;

    transactions.map((transaction) => {
      const { category, amount } = transaction;
      transactionsByCategory[category] = transactionsByCategory[category] || {
        sum: 0,
        transactions: [],
      };
      transactionsByCategory[category].sum += parseFloat(amount);
      transactionsByCategory[category].transactions.push(transaction);

      totalAmount += parseFloat(amount);

      return { transactions, transactionsByCategory, totalAmount };
    });
  } catch (err) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

const getBudgetSummary = async (budget, transactionsByCategory) => {
  const combinedArray = [];
  for (let key of Object.keys(budget)) {
    if (key !== "userId") {
      const amountAllocated = budget[key];
      const amountSpent = transactionsByCategory[key]
        ? transactionsByCategory[key].sum
        : 0;
      const amountRemaining = amountAllocated - amountSpent;
      combinedArray.push({
        key,
        amountAllocated,
        amountSpent,
        amountRemaining,
      });
    }
  }
  return combinedArray;
};

router.post("/getReportsData", async (req, res) => {
  try {
    const { userId, startDate, endDate } = req.body;
    const budget = await fetchBudget(userId);
    const income = await fetchTransactions(
      userId,
      "income",
      startDate,
      endDate
    );
    const expenses = await fetchTransactions(
      userId,
      "expense",
      startDate,
      endDate
    );
    const budgetSummary = getBudgetSummary(
      budget,
      expenses.transactionsByCategory
    );

    const responseData = {
      success: true,
      budget: budget,
      income: income,
      expenses: expenses,
      budgetSummary: budgetSummary,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error fetching reports data:", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
