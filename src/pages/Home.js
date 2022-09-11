import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEmployee } from "../context/employee-context";
import { EmployeeCard } from "../components/EmployeeCard";
import { MdAddCircle } from "react-icons/md";

import "../style/home.css";

function Home() {

  const { employee, dispatch } = useEmployee();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    dispatch({
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

    setShow(false);
  };
  
  return (
    <>
      <div className="add_employee_container">
        <div className="add">
          <MdAddCircle
            className="card_icon add_icon"
            onClick={handleShow}
            size="2rem"
          />
          <p>Add employeeCard</p>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add employee details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
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
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  type="tel"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
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
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
        {employee.length === 0
          ? <div className="empty">
          <p>Nothing here</p>
          <img className="image" src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png" alt=""/>

          </div>
          : <div className="home_container">{
          employee.map((data, index) => {
              return <EmployeeCard key={index} data={data} />;
            })
          }

            </div>
        }
     
    </>
  );
}

export default Home;
