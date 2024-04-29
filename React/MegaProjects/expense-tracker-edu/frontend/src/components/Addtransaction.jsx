import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const AddTransactionSchema = z.object({
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

const Addtransaction = ({ transactionType }) => {
  const [errorState, setErrorState] = useState(false);
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(AddTransactionSchema),
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.name) navigate("/login");
  }, [user]);
  const onSubmit = async (formData) => {
    // Axios POST request to add transaction
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/addTransaction`,
        {
          userId: user.uid,
          type: transactionType,
          transactionData: formData,
        }
      );
      if (response.data.success) {
        navigate(transactionType === "income" ? "/income" : "/expenses");
      } else {
        setErrorState(true);
      }
    } catch (error) {
      setErrorState(true);
    }
  };

  const handleCancel = () => {
    navigate(transactionType === "income" ? "/income" : "/expenses");
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>{transactionType === "income" ? "Add Income" : "Add Expense"}</h2>
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
                />
                {errors.amount && (
                  <p className="text-danger">{errors.amount.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  Payment Method
                </label>
                <select className="form-select" {...register("paymentMethod")}>
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
                  <p className="text-danger">{errors.paymentMethod.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <textarea className="form-control" {...register("notes")} />
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
                <select className="form-select" {...register("category")}>
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
                <select className="form-select" {...register("frequency")}>
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
        {errorState && (
          <div className={`alert ${"alert-danger"} mt-5`} role="alert">
            <div>
              <i className={`bi ${"bi-exclamation-triangle-fill"} m-2`}></i>
              {transactionType === "income"
                ? "Income could not be added."
                : "Expense could not be added."}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addtransaction;
