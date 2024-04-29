import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchAllTransactionsQuery } from "../store/api-service";
import RemoveTransaction from "./RemoveTransaction";

const Transactions = ({ transactionType }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.name) navigate("/login");
  }, [user]);

  const { data, error, isLoading } = useFetchAllTransactionsQuery(
    {
      userId: user.uid,
      type: transactionType,
    },
    {
      skip: !user.uid || !transactionType, // Skip the query if userId or transactionType is not available
      refetchOnMountOrArgChange: true, // Ensure data is fetched when component mounts or arguments change
    }
  );

  const handleEditTransaction = (transaction) => {
    const editTransactionUrl = `/getTransaction/${transactionType}/${transaction.formId}`;
    navigate(editTransactionUrl);
  };

  const handleRemove = () => {};

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {isLoading && (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className={`alert ${"alert-danger"} mt-5`} role="alert">
            <div>
              <i className={`bi ${"bi-exclamation-triangle-fill"} m-2`}></i>
              {`Transactions could not be retrieved.`}
            </div>
          </div>
        )}
        {data && (
          <>
            <h2>{transactionType === "income" ? "Income" : "Expenses"}</h2>
            <Link
              className="btn btn-outline-secondary mt-3 mb-4"
              to={`/add${transactionType}`}
            >
              Add {transactionType === "income" ? "Income" : "Expense"}
            </Link>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Frequency</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.userTransactions.map((transaction) => (
                  <tr key={transaction.formId}>
                    <td>{transaction.date}</td>
                    <td>
                      {transaction.category.charAt(0).toUpperCase() +
                        transaction.category.slice(1)}
                    </td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.paymentMethod}</td>
                    <td>{transaction.frequency}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => handleEditTransaction(transaction)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <RemoveTransaction
                        transactionType={transactionType}
                        transaction={transaction}
                        onRemove={handleRemove}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Transactions;
