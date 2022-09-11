import { createContext, useReducer, useContext } from "react";
import { employeeReducer } from "../reducer/employeeReducer.js";

const initialState = {
  employee:[]
};

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [{employee}, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  return (
    <EmployeeContext.Provider value={{ employee, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

const useEmployee = () => useContext(EmployeeContext);
export { useEmployee, EmployeeProvider };
