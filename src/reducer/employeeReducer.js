export const employeeReducer = (state, { type, payload }) => {
  console.log("employee reducer :: ", type)
  switch (type) {
    case "ADD_EMP":
      let toAddEmployeeId;
      const employeeList = state.employee;

      if (employeeList.length > 0) {
        const lastAddedEmployee = state.employee[state.employee.length - 1];
        const lastEmployeeId = lastAddedEmployee.id;
        toAddEmployeeId = lastEmployeeId + 1;
      } else {
        toAddEmployeeId = 1;
      }
      return {
        ...state, 
        employee: [...state.employee,{...payload,id: toAddEmployeeId}],
      };
    case "DLT_EMP":

      return {
        ...state,
        employee: [...state.employee.filter((ele) => ele.id === payload.toDeleteId)],
      };
      
    case "UPDATE":
      let index = state.employee.findIndex((ele) => ele.id === payload.id);
      console.log(index);
      if(index > -1){
        const employeeList = [...state.employee];
        employeeList[index] = {...payload};

        return {
          ...state,
          employee: employeeList,
        }
      }else{
        return {...state};
      }

    default:
      throw new Error("Unhandled action type");
  }
};
