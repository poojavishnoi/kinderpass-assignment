export const employeeReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_EMP":
      return {
        ...state,
        employee: [...state.employee, { ...payload }],
      };

    case "DLT_EMP":
      return {
        ...state,
        employee: [...state.employee.filter((ele) => ele.email !== payload.email)],
      };
    case "UPDATE":
      return {
        ...state,
        employee: payload,
      };

    default:
      throw new Error("Unhandled action type");
  }
};
