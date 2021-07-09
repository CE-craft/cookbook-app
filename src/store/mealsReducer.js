export const mealsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MEALS":
      return { ...state, ...action.meals };
    default:
      return state;
  }
};
