import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const HOST = import.meta.env.VITE_HOST;
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const budgetSchema = z.object({
  groceries: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
  health: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
  transport: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
  accommodation: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
  gift: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
  other: z
    .string() // Accepts a string input
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Amount must be a number", // Custom error message for non-numeric values
    })
    .refine((value) => parseFloat(value) >= 0, {
      message: "Amount must be positive",
    }),
});

const Budget = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.name) {
      navigate("/login");
    }
  });

  // API call using React-Query
  // const budgetData = useQuery(["budget", user.uid], fetchBudget);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(budgetSchema),
  });

  // const [budgetData, setBudgetData] = useState({
  //   groceries: 0,
  //   health: 0,
  //   transport: 0,
  //   accommodation: 0,
  //   gift: 0,
  //   other: 0,
  // });
  // const [isLoading, setIsLoading] = useState(true);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["budget"],
    queryFn: async () => {
      const response = await axios.post(`${HOST}/getBudget`, {
        userId: user.uid,
      });
      if (response.data.success) {
        return response.data.budgetData;
      } else {
        setAlertType("error");
        setAlertMessage("Budget could not be retrieved.");
        throw new Error("Budget could not be retrieved.");
      }
    },
  });

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchBudget = async () => {
  //     try {
  //       const response = await axios.post(`${HOST}/getBudget`, {
  //         userId: user.uid,
  //       });

  //       console.log(response.data.budgetData);

  //       if (response.data.success) {
  //         setBudgetData(response.data.budgetData);
  //       } else {
  //         setAlertType("error");
  //         setAlertMessage("Budget could not be retrieved.");
  //       }
  //       setIsLoading(false);
  //     } catch (err) {
  //       setAlertType("error");
  //       setAlertMessage("Budget could not be retrieved.");
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchBudget();
  // }, []);

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(`${HOST}/saveBudget`, {
        userId: user.uid,
        budgetData: formData,
      });

      if (response.data.success) {
        setAlertType("success");
        setAlertMessage("Budget saved successfully.");
      } else {
        setAlertType("error");
        setAlertMessage("Budget could not be retrieved.");
      }
    } catch (error) {
      setAlertType("error");
      setAlertMessage("Budget could not be saved.");
    }
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {isPending && (
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
        {data && (
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
                        defaultValue={data.groceries}
                      />
                      {errors.groceries && (
                        <p className="text-danger">
                          {errors.groceries.message}
                        </p>
                      )}
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
                        defaultValue={data.health}
                      />
                      {errors.health && (
                        <p className="text-danger">{errors.health}</p>
                      )}
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
                        defaultValue={data.transport}
                      />
                      {errors.transport && (
                        <p className="text-danger">{errors.transport}</p>
                      )}
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
                        defaultValue={data.accommodation}
                      />
                      {errors.accommodation && (
                        <p className="text-danger">{errors.accommodation}</p>
                      )}
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
                        defaultValue={data.gift}
                      />
                      {errors.gift && (
                        <p className="text-danger">{errors.gift}</p>
                      )}
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
                        defaultValue={data.other}
                      />
                      {errors.other && (
                        <p className="text-danger">{errors.other}</p>
                      )}
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Budget;
