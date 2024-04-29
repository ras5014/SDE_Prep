import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { set } from "firebase/database";

const EditTransaction = ({ transactionType }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const initialState = {
    id: null,
    date: "",
    category: "",
    amount: 0,
    frequency: "",
    paymentMethod: "",
    notes: "",
  };

  const [transactionData, setTransactionData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const { date, category, amount, frequency, paymentMethod, notes } =
    transactionData;

  useEffect(() => {
    if (!user.name) navigate("/login");

    setIsLoading(true);
    const fetchTransactionData = async () => {
      try {
        const { type, id } = useParams();
        const response = await axios.get(
          `/getTransaction?type=${transactionType}&id=${id}`
        );

        if (response.data.success) {
          setTransactionData({ ...response.data.transaction, id });
          setIsLoading(false);
        } else {
          setAlertType("error");
          setAlertMessage(
            transactionType === "income"
              ? "Income could not be retrieved."
              : "Expense could not be retrieved."
          );
          setIsLoading(false);
        }
      } catch (err) {
        setAlertType("error");
        setAlertMessage(
          transactionType === "income"
            ? "Income could not be retrieved."
            : "Expense could not be retrieved."
        );
        setIsLoading(false);
      }
    };
    fetchTransactionData();
  });

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
      </div>
    </div>
  );
};

export default EditTransaction;
