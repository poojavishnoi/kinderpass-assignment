import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEmployee } from "../context/employee-context";

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
      console.log("Add employee modal added");
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
        <Modal.Header closeButton>
          <Modal.Title>Add employee details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                value={email}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date of birth :</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                type="date"
                value={dob}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                type="tel"
                value={number}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                value={city}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                as="textarea"
                value={address}
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeModal;
