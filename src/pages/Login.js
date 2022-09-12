import React, { useState, useEffect } from "react";
import login from "../assests/login.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import "../style/signup.css";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const { user, error, message, dispatch } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
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
    }else if(message){
      toast.success(`${message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error, message]);

  const uploadData = (event) => {
    event.preventDefault();

    if(!user){
      dispatch({type:"AUTH_FAIL", payload: 'user not signed in'})
    }else if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } else {
      dispatch({
        type: "AUTH_FAIL",
        payload: "Email or password entered is wrong",
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
              value={email}
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
              value={password}
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
