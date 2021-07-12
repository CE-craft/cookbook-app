export const widgetsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WIDGETS":
      return [...action.widgets];
    default:
      return state;
  }
};
