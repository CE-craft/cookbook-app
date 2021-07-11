export const recipesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_RECIPIES":
      return {
        recipes: [...action.recipes],
      };
    default:
      return state;
  }
};
