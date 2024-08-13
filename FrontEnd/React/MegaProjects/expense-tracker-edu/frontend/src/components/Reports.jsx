import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const HOST = import.meta.env.VITE_HOST;
import IncomeExpense from "./IncomeExpense";
import BudgetSummary from "./BudgetSummary";
import RecurringIncomeExpenses from "./RecurringIncomeExpenses";
const today = new Date();

const reportSchema = z.object({
  startDate: z.string().refine(
    (val) => {
      const providedDate = new Date(val);
      return providedDate <= today; // Return true if the provided date is not more than today
    },
    {
      message: "Start date cannot be later than today", // Custom error message for start date more than today
    }
  ),

  endDate: z.string().refine(
    (val) => {
      const providedDate = new Date(val);
      return providedDate <= today; // Return true if the provided date is not more than today
    },
    {
      message: "End date cannot be later than today", // Custom error message for end date more than today
    }
  ),
  reportType: z.string().nonempty("Report type is required"),
});

const Reports = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [incomeData, setIncomeData] = useState([]);
  const [expensesData, setExpensesData] = useState([]);
  const [budgetSummary, setBudgetSummary] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [reportType, setReportType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user.name) navigate("/login");
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reportSchema),
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${HOST}/getReportsData`, {
        userId: user.uid,
        startDate: formData.startDate,
        endDate: formData.endDate,
      });

      if (response.data.success) {
        setAlertType("success");
        setAlertMessage("Report generated successfully.");
        setReportType(formData.reportType);
        setIncomeData(response.data.income);
        setExpensesData(response.data.expenses);
        setBudgetSummary(response.data.budgetSummary);
        setIsLoading(false);
      } else {
        setAlertType("error");
        setAlertMessage("Report could not be generated.");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setAlertType("error");
      setAlertMessage("Report could not be generated.");
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
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

        {reportType === "incomeexpenses" && (
          <IncomeExpense income={incomeData} expenses={expensesData} />
        )}

        {reportType === "budgetsummary" && (
          <BudgetSummary income={incomeData} budgetSummary={budgetSummary} />
        )}

        {reportType === "recurringincomeexpenses" && (
          <RecurringIncomeExpenses
            income={incomeData}
            expenses={expensesData}
          />
        )}

        {reportType === "" && (
          <>
            <h2>Reports</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("startDate")}
                    />
                    {errors.startDate && (
                      <p className="text-danger">{errors.startDate.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("endDate")}
                    />
                    {errors.endDate && (
                      <p className="text-danger">{errors.endDate.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reportType" className="form-label">
                      Report Type
                    </label>
                    <select className="form-select" {...register("reportType")}>
                      <option value="">Select Report</option>
                      <option value="budgetsummary">
                        Budget Summary Report
                      </option>
                      <option value="incomeexpenses">
                        Income/Expenses Report
                      </option>
                      <option value="recurringincomeexpenses">
                        Recurring Income/Expenses Report
                      </option>
                    </select>
                    {errors.reportType && (
                      <p className="text-danger">{errors.reportType.message}</p>
                    )}
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2"
                    >
                      <i className="bi bi-save me-2"></i>
                      {isSubmitting ? "Generating" : "Generate"}
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
              <div
                className={`alert ${
                  alertType === "success" ? "alert-success" : "alert-danger"
                } mt-5`}
                role="alert"
              >
                <div>
                  <i
                    className={`bi ${
                      alertType === "success"
                        ? "bi-check-circle-fill"
                        : "bi-exclamation-triangle-fill"
                    } m-2`}
                  ></i>
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

export default Reports;
