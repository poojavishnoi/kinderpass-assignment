import React from "react";
import "../style/header.css";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../context/auth-context";
function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const renderList = () => {
    if (user) {
      return [
        <li key={1}>
          {" "}
          <button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key={6}>
          <Link to="/login">
            <CgProfile
              className="icon"
              style={{ color: "black" }}
              size="1.7rem"
            />
          </Link>
          Login
        </li>,
        <li key={7}>
          <Link to="/">
            <CgProfile
              className="icon"
              style={{ color: "black" }}
              size="1.7rem"
            />
          </Link>
          SignUp
        </li>,
      ];
    }
  };

  return (
    <div className="header_main_container">
      <div className="header_logo">
        <h3>Kinderpass</h3>
      </div>

      <div className="header_links">
        <ul>{renderList()}</ul>
      </div>
    </div>
  );
}

export default Header;
