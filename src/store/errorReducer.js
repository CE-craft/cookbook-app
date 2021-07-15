export const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case "CATCH_ERROR":
      return { error: action.error };
    case "HIDE_ERROR":
      return {};
    default:
      return state;
  }
};
