import React, { useState } from "react";
import { useEmployee } from "../context/employee-context";
import { EmployeeCard } from "../components/EmployeeCard";
import "../style/home.css";
import EmployeeModal from "../components/EmployeeModal";
import { Button } from "react-bootstrap";

function Home() {
  const { employee } = useEmployee();
  const [toShowEmployeePopup, setToShowEmployeePopup] = useState(false)
  const [toEditEmployeeId, setToEditEmployeeId] = useState(null)
  

  const addEmployeeClickHandler = () => {
    console.log("adding employee");
    setToEditEmployeeId(null)
    setToShowEmployeePopup(true)
    
  }

  const closeEmployeeClickHandler = () => setToShowEmployeePopup(false)

  const setEmployeeId = (id) => {
    setToEditEmployeeId(id)
    console.log("editing id: ", id);
    setToShowEmployeePopup(true)
  }

  let toRender;
  if (employee.length === 0 ) {
    toRender = (
      <div className="empty">
      <p>Nothing here</p>
      <img
        className="image"
        src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png"
        alt=""
      />
    </div>
    )
  } else {
    toRender = (
      <div className="home_container">
          {employee.map((data, index) => {
            return <EmployeeCard key={index} onEdit={setEmployeeId} data={data}   />;
          })}
        </div>
    )
  }

  return (
    <>
    {
      toShowEmployeePopup ?
      <EmployeeModal editEmployeeId={toEditEmployeeId} toShow={toShowEmployeePopup} onClose={closeEmployeeClickHandler}/>
      :
      null
    }
      <div>
        <Button onClick={addEmployeeClickHandler}>add employee</Button>
      </div>
     {toRender}
    </>
  );
}

export default Home;
