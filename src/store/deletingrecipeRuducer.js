export const deletingrecipeRuducer = (state = {}, action) => {
  switch (action.type) {
    case "HOLD_RECIPE":
      //console.log("Reducer", { ...action.recipe });
      return { ...action.recipe };
    default:
      return state;
  }
};
