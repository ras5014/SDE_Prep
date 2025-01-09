import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useFetchBudgetQuery } from "../store/api-service";
import axios from "axios";
const HOST = import.meta.env.VITE_HOST;
import Graph from "./Graph";

const Home = () => {
  const [dateTime, setDateTime] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const startDate = new Date(new Date().getFullYear(), 0, 1).toISOString();
  const endDate = new Date().toISOString();

  useEffect(() => {
    if (!user.name) navigate("/login");
  }, [user]);

  // Getting BudgetData
  const [budgetSummary, setBudgetSummary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  useEffect(() => {
    if (user) {
      setIsLoading(true); // Set loading state to true while data is fetched
      const fetchBudget = async () => {
        try {
          const response = await axios.post(`${HOST}/getReportsData`, {
            userId: user.uid,
            startDate: new Date(new Date().getFullYear(), 0, 1),
            endDate: new Date(),
          });

          if (response.data.success) {
            // Update the state with the fetched data
            setBudgetSummary(response.data.budgetSummary);
          } else {
            setAlertType("error");
            setAlertMessage("Budget data could not be retrieved.");
          }

          setDateTime(
            new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })
          );

          setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
          console.log(error);
          setAlertType("error");
          setAlertMessage("Budget data could not be retrieved.");
          setIsLoading(false); // Set loading state to false if there's an error
        }
      };

      fetchBudget();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {user && <h2>Hello, {user.name}!</h2>}

        {alertMessage && (
          <div className={`alert ${"alert-danger"} mt-5`} role="alert">
            <div>
              <i className={`bi ${"bi-exclamation-triangle-fill"} m-2`}></i>
              {`Budget data could not be retrieved.`}
            </div>
          </div>
        )}

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

        {budgetSummary && (
          <div className="row">
            <div className="col-md-5 mt-5">
              <div className="card text-center">
                <div className="card-body">
                  <h3 className="text-start p-1 mt-2 mb-2">Budget Summary</h3>
                  <table className="table table-sm table-striped table-hover mt-3">
                    <thead>
                      <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Amount Allocated</th>
                        <th scope="col">Amount Spent</th>
                        <th scope="col">Amount Remaining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {budgetSummary.map((item) => (
                        <tr key={item.key}>
                          <td>
                            {item.key.charAt(0).toUpperCase() +
                              item.key.slice(1)}
                          </td>
                          <td>
                            ₹{parseFloat(item.amountAllocated).toLocaleString()}
                          </td>
                          <td>
                            ₹{parseFloat(item.amountSpent).toLocaleString()}
                          </td>
                          <td>
                            {item.amountRemaining < 0
                              ? `-$${Math.abs(
                                  item.amountRemaining
                                ).toLocaleString()}`
                              : `₹${item.amountRemaining.toLocaleString()}`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-body-secondary">
                  <i>As of: {dateTime}</i>
                </div>
              </div>
            </div>
            <div className="col-md-7 mt-5">
              <Graph graphData={budgetSummary} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
