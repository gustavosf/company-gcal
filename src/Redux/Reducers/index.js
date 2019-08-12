const INITIAL_STATE = { auth: false };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INIT":
      return { ...state };
    case "LOGIN":
      return { ...state, auth: true };
    case "LOGOUT":
      return { ...state, auth: false };
    default:
      return state;
  }
};
export default reducer;
