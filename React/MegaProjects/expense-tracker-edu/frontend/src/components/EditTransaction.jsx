import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EditTransactionSchema = z.object({
  date: z.string().date("Date is required"),
  amount: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) > 0, {
      message: "Amount must be positive",
    }),
  paymentMethod: z.string().nonempty("Payment method is required"),
  notes: z.string().nonempty("Notes is required"),
  category: z.string().nonempty("Category is required"),
  frequency: z.string().nonempty("Frequency is required"),
});

const EditTransaction = ({ transactionType }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { id } = useParams();

  const [transactionData, setTransactionData] = useState({
    id: null,
    date: "",
    category: "",
    amount: 0,
    frequency: "",
    paymentMethod: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!user.name) navigate("/login");
  });
  useEffect(() => {
    setIsLoading(true);
    const fetchTransactionData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/getTransaction/${transactionType}/${id}`
        );

        if (response.data.success) {
          setTransactionData({ ...response.data.transaction, id });
          setIsLoading(false);
        } else {
          setAlertMessage(
            transactionType === "income"
              ? "Income could not be retrieved."
              : "Expense could not be retrieved."
          );
          setIsLoading(false);
        }
      } catch (err) {
        setAlertMessage(
          transactionType === "income"
            ? "Income could not be retrieved."
            : "Expense could not be retrieved."
        );
        setIsLoading(false);
      }
    };
    fetchTransactionData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(EditTransactionSchema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      // const { id, ...formData } = formData;
      const response = await axios.put(
        `http://localhost:5000/api/v1/editTransaction`,
        {
          type: transactionType,
          id: id,
          transactionData: formData,
        }
      );
      if (response.data.success) {
        navigate(transactionType === "income" ? "/income" : "/expenses");
      } else {
        setAlertMessage(
          transactionType === "income"
            ? "Income could not be updated."
            : "Expense could not be updated."
        );
      }
    } catch (err) {
      setAlertMessage(
        transactionType === "income"
          ? "Income could not be updated."
          : "Expense could not be updated."
      );
    }
  };
  const handleCancel = () => {
    navigate(transactionType === "income" ? "/income" : "/expenses");
  };

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
        {!isLoading && (
          <>
            <h2>
              {transactionType === "income" ? "Edit Income" : "Edit Expense"}
            </h2>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("date")}
                      defaultValue={transactionData.date}
                    />
                    {errors.date && (
                      <p className="text-danger">{errors.date.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("amount")}
                      defaultValue={transactionData.amount}
                    />
                    {errors.amount && (
                      <p className="text-danger">{errors.amount.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">
                      Payment Method
                    </label>
                    <select
                      className="form-select"
                      {...register("paymentMethod")}
                      defaultValue={transactionData.paymentMethod}
                    >
                      <option value="">Select Method</option>
                      <option value="Cash">Cash</option>
                      {transactionType === "expense" && (
                        <option value="Card">Card</option>
                      )}
                      <option value="Cheque">Cheque</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.paymentMethod && (
                      <p className="text-danger">
                        {errors.paymentMethod.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="notes" className="form-label">
                      Notes
                    </label>
                    <textarea
                      className="form-control"
                      {...register("notes")}
                      defaultValue={transactionData.notes}
                    />
                    {errors.notes && (
                      <p className="text-danger">{errors.notes.message}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <select
                      className="form-select"
                      {...register("category")}
                      defaultValue={transactionData.category}
                    >
                      <option value="">Select Category</option>
                      {transactionType === "income" ? (
                        <>
                          <option value="salary">Salary</option>
                          <option value="freelance">Freelance</option>
                          <option value="loan">Loan</option>
                        </>
                      ) : (
                        <>
                          <option value="groceries">Groceries</option>
                          <option value="health">Health</option>
                          <option value="transport">Transport</option>
                          <option value="accommodation">Accommodation</option>
                        </>
                      )}
                      <option value="gift">Gift</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.category && (
                      <p className="text-danger">{errors.category.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="frequency" className="form-label">
                      Frequency
                    </label>
                    <select
                      className="form-select"
                      {...register("frequency")}
                      defaultValue={transactionData.frequency}
                    >
                      <option value="Once">Once</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Semi-Annually">Semi-Annually</option>
                      <option value="Annually">Annually</option>
                    </select>
                    {errors.frequency && (
                      <p className="text-danger">{errors.frequency.message}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-outline-success me-2"
                    >
                      <i className="bi bi-save me-2"></i>
                      {isSubmitting ? "Adding..." : "Add"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={handleCancel}
                    >
                      <i className="bi bi-x-square me-2"></i>Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {alertMessage && (
              <div className={`alert ${"alert-danger"} mt-5`} role="alert">
                <div>
                  <i className={`bi ${"bi-exclamation-triangle-fill"} m-2`}></i>
                  {alertMessage}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EditTransaction;
