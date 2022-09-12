import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useEmployee } from "../context/employee-context";
import login from "../assests/login.jpg";
import "../style/signup.css";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";


function Signup() {
  const { error, message, dispatch } = useAuth();
  const { employee} = useEmployee()
  const navigate = useNavigate();

  useEffect(() => {
      let error = "";
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


  }, [error, message, dispatch]);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");


  const uploadData = () => {
    dispatch({
      type: "AUTH_SUCCESS",
      payload: { name, email, password, address, dob, company, employee },
    });
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img alt="" src={login} />
      </div>

      <div className="signup-main-container">
        <h1 className="signup_header">Get's started!!</h1>
        <p>Already have an account?</p>
        <button onClick={() => navigate("/login")} className="login_btn">
          Login
        </button>
        
        
        <form onSubmit={uploadData}>
          <div className="signup_form">
            <h5>Email</h5>
            <input
              type={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
            ></input>

            <h5>Name</h5>
            <input
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter name"
            ></input>

            <h5>Password</h5>
            <input
              type="password"
              required
              pattern=".{6,}"  title="6 characters minimum"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
            ></input>

            <h5>Date of birth</h5>
            <input
              type="date"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              placeholder="Enter date of birth"
            ></input>

            <h5>Address</h5>
            <input
              required
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter address"
            ></input>

            <h5>Company</h5>
            <input
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Enter company"
            ></input>

            <br />
          </div>
          <input
            type="submit"
            value="Register"
            className="register_btn"
          ></input>
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

export default Signup;
