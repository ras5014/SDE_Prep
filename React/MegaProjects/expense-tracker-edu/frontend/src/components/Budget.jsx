import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import fetchBudget from "../queries/fetchBudget";

const Budget = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  // API call using React-Query
  const budgetData = useQuery({
    queryKey: ["budget", user.uid],
    queryFn: fetchBudget,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (formData) => {};
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {budgetData.isLoading && (
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
        {budgetData.isSuccess && (
          <>
            <h2>Budget Allocation</h2>
            <div className="row mt-5">
              <div className="col-md-6 offset-md-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-cart-fill me-2"></i>Groceries
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("groceries")}
                        defaultValue={budgetData.groceries}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-hospital-fill me-2"></i>Health
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("health")}
                        value={budgetData.health}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-car-front-fill me-2"></i>Transport
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("transport")}
                        defaultValue={budgetData.transport}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-house-fill me-2"></i>Accommodation
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("accommodation")}
                        defaultValue={budgetData.accommodation}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-gift-fill me-2"></i>Gift
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("gift")}
                        defaultValue={budgetData.gift}
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="col-md-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-cash-stack me-2"></i>Other
                      </span>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="number"
                        className="form-control"
                        {...register("other")}
                        defaultValue={budgetData.other}
                      />
                    </div>
                  </div>
                  <div className="mb-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-outline-success me-2"
                    >
                      <i className="bi bi-save me-2"></i>Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={handleCancel}
                    >
                      <i className="bi bi-x-square me-2"></i>Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Budget;
