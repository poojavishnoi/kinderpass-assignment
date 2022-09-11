import React from "react";
import "../style/employeeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import login from "../assests/login.jpg";
import { useEmployee } from "../context/employee-context";

export function EmployeeCard({ data }) {
  const { dispatch } = useEmployee();
  return (
    <>
      <div className="employee_card">
        <img src={login} alt="thumbnail" />

        <h3>
          {data.name}
          <span>: 1</span>
        </h3>
        <p>Address: {data.address}</p>
        <p>DOB: {data.dob}</p>
        <p>Mobile no: {data.number}</p>
        <p>city: {data.city}</p>

        <div className="card_icons">
          <MdEdit className="card_icon" size="1.5rem" />
          <AiFillDelete
            onClick={() =>
              dispatch({
                type: "DLT_EMP",
                payload: data,
              })
            }
            className="card_icon"
            size="1.5rem"
          />
        </div>
      </div>
    </>
  );
}
