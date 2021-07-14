export const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case "FILTER_TAG":
      return { ...state, tag: action.tag };
    case "SEARCH":
      return { ...state, search: action.searchValue };
    case "FILTER_RECIPES":
      return { ...state, filtered: [...action.recipes] };
    default:
      return state;
  }
};
