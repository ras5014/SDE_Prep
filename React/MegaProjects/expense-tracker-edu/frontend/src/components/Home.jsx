import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchBudgetQuery } from "../store/api-service";

const Home = () => {
  const [dateTime, setDateTime] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const startDate = new Date(new Date().getFullYear(), 0, 1).toISOString();
  const endDate = new Date().toISOString();

  // Getting BudgetData
  const { data, error, isLoading, isSuccess } = useFetchBudgetQuery({
    userId: user.uid,
    startDate: startDate,
    endDate: endDate,
  });

  useEffect(() => {
    if (!user.name) navigate("/login");
  }, [user]);

  const getDateTime = () => {
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
    return dateTime;
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {user && <h2>Hello, {user.name}!</h2>}

        {error && (
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

        {data && (
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
                      {data.map((item) => (
                        <tr key={item.key}>
                          <td>
                            {item.key.charAt(0).toUpperCase() +
                              item.key.slice(1)}
                          </td>
                          <td>
                            ${parseFloat(item.amountAllocated).toLocaleString()}
                          </td>
                          <td>
                            ${parseFloat(item.amountSpent).toLocaleString()}
                          </td>
                          <td>
                            {item.amountRemaining < 0
                              ? `-$${Math.abs(
                                  item.amountRemaining
                                ).toLocaleString()}`
                              : `$${item.amountRemaining.toLocaleString()}`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-body-secondary">
                  <i>As of: {getDateTime}</i>
                </div>
              </div>
            </div>
            {/* <div className="col-md-7 mt-5">
              <Graph graphData={data} />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
