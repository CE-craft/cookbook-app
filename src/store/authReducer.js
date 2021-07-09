export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state.isAuthenticated = action.uid);
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
