import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../config/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInStatus, setSignInStatus] = useState("");
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const response = await axios.post(
        "http://localhost:5000/api/v1/google-signin",
        {
          idToken: idToken,
        }
      );

      if (response.data.success) {
        dispatch(setUser(response.data.user));
        navigate("/");
      } else {
        setSignInStatus("Google Sign-In failed");
      }
    } catch (err) {
      console.log("Error: ", err);
      setSignInStatus("Google Sign-In failed");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 bg-dark text-white d-flex align-items-center justify-content-center">
          <img
            src="/logos/logo-login.png"
            className="img-fluid mx-auto d-block"
            style={{
              width: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="BudgetBuddy"
          />
        </div>

        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
          <div className="card-body text-center">
            <h3 className="card-title mb-5">
              Sign in with your Google account!
            </h3>
            <button className="btn btn-dark mt-5" onClick={handleGoogleSignIn}>
              Sign in with Google
            </button>
            {signInStatus && (
              <div
                className="alert alert-danger mt-5 col-md-6 offset-md-3"
                role="alert"
              >
                <div>
                  <i className="bi bi-exclamation-triangle-fill m-2"></i>
                  {signInStatus}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
