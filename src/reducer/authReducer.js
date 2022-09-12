export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "AUTH_INIT":
      return{
        ...state,
        message:"",
        error: "",
        user:null
      }
    case "AUTH_SUCCESS":
      return {
        ...state,
        message: "Saved successfully",
        error:'',
        user: payload,
      };
    case "AUTH_FAIL":
      return {
        ...state,
        error: payload,
        message:''
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        error: "",
        message:''
      };
    default:
      throw new Error("Unhandled action type");
  }
};
