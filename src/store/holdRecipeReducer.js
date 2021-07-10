export const holdRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case "HOLD_RECIPE":
      return { ...action.recipe };
    case "SAVE_RECIPE":
      return {};
    default:
      return state;
  }
};
