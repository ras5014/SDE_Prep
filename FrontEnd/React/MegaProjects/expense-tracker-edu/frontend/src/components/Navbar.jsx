import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../store/user-slice";
import { useDispatch } from "react-redux";

const Navbar = ({ onReportsLinkClick }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
    } catch (err) {
      console.error("Error during logout", err);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/logos/logo-nav.png"
            style={{
              height: "40px",
            }}
            alt="Login"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/budget" activeClassName="active">
              Budget
            </NavLink>
            <NavLink className="nav-link" to="/income" activeClassName="active">
              Income
            </NavLink>
            <NavLink
              className="nav-link"
              to="/expenses"
              activeClassName="active"
            >
              Expenses
            </NavLink>
            <NavLink
              className="nav-link"
              to="/reports"
              activeClassName="active"
              onClick={onReportsLinkClick}
            >
              Reports
            </NavLink>
          </div>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-danger mx-2"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>Signout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
