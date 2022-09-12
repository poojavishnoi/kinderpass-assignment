import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useEmployee } from "../context/employee-context";
import '../style/employeeModal.css'

function EmployeeModal({ toShow, onClose, editEmployeeId }) {
  const { employee, empDispatch } = useEmployee();
  
  const [data] = employee.filter((ele) => ele.id === editEmployeeId);

  const [email, setEmail] = useState(data ? data.email :  "");
  const [address, setAddress] = useState(data ?  data.address : "");
  const [dob, setDob] = useState(data ?  data.dob :  "");
  const [name, setName] = useState(data ?  data.name :  "");
  const [city, setCity] = useState(data ?  data.city :  "");
  const [number, setNumber] = useState(data ?  data.number :  "");

  const handleSave = () => {
    if (editEmployeeId === null) {
      empDispatch({
        type: "ADD_EMP",
        payload: {
          name,
          email,
          number,
          dob,
          city,
          address,
        },
      });
      onClose();
    } else {
      empDispatch({
        type: "UPDATE",
        payload: {
          id: editEmployeeId,
          email,
          address,
          dob,
          name,
          city,
          number,
        },
      })
      onClose();

    }
  };

  return (
    <div className="add_employee_container">
      <Modal show={toShow} onHide={onClose}>
      <form onSubmit={handleSave}>
        <Modal.Header closeButton>
          <Modal.Title>Add employee details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <div className="modal_form">
            <h5>Email</h5>
            <input
              type={email}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
            ></input>

            <h5>Name</h5>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter name"
            ></input>

            <h5>Mobile No. </h5>
            <input
              type="tel"
              required
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              placeholder="Enter Password"
            ></input>

            <h5>Date of birth</h5>
            <input
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              placeholder="Enter date of birth"
            ></input>

            <h5>Address</h5>
            <input
              required
              type="textarea"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Enter address"
            ></input>

            <h5>City</h5>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="Enter company"
            ></input>

            <br />
          </div>
          
        
        </Modal.Body>
        <Modal.Footer>

        <button className="login_btn" onClick={onClose}>
          Close
        </button>
        <input className="register_btn" type="submit" value="Save changes"></input>

          
          {/* <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button> */}
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default EmployeeModal;
