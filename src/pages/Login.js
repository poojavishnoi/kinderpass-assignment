import React, { useState } from "react";
import login from "../assests/login.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { toast, ToastContainer } from "react-toastify";
import "../style/signup.css";
import "react-toastify/dist/ReactToastify.min.css";

function Login() {
  const { user, error, dispatch } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const uploadData = (event) => {
    event.preventDefault();
    if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } else {
      dispatch({
        type: "AUTH_FAIL",
        payload: "Email or password entered is wrong",
      });
    }
    if (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img alt="" src={login} />
      </div>
      <div className="signup-main-container">
        <h1 className="signup_header">Get's started!!</h1>
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/")} className="login_btn">
          Signup
        </button>

        <form onSubmit={uploadData}>
          <div className="signup_form">
            <h5>Email</h5>
            <input
              type="text"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
            ></input>

            <h5>Password</h5>
            <input
              type="password"
              required
              pattern=".{6,}"
              title="6 characters minimum"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
            ></input>
            <br />
          </div>
          <input className="register_btn" type="submit" value="Login"></input>
        </form>
      </div>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </div>
  );
}

export default Login;
