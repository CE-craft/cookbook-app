export const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case "FILTER_TAG":
      return { tag: action.tag };
    case "SEARCH":
      return { search: action.searchValue };
    default:
      return state;
  }
};
