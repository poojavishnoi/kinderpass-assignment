import React from "react";
import "../style/employeeCard.css";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import login from "../assests/login.jpg";
import { useEmployee } from "../context/employee-context";

export function EmployeeCard({ data, onEdit }) {
  const { empDispatch } = useEmployee();

  const editEmployeeClickHandler = (id) => {
    onEdit(id)
  };

  const deleteHandler = () => {
    empDispatch({
      type: "DLT_EMP",
      payload: data.id,
    });
  };

  return (
    <>

      <div className="employee_card">
        <img src={login} alt="thumbnail" />

        <h3>
          {data.name}
          <span>:{data.id}</span>
        </h3>
        <p>Address: {data.address}</p>
        <p>DOB: {data.dob}</p>
        <p>Mobile no: {data.number}</p>
        <p>city: {data.city}</p>

        <div className="card_icons">
          <MdEdit
            onClick={() => editEmployeeClickHandler(data.id)}
            className="card_icon"
            size="1.5rem"
          />
          <AiFillDelete
            onClick={deleteHandler}
            className="card_icon"
            size="1.5rem"
          />
        </div>
      </div>
    </>
  );
}
