//import { getRecipiesSearch } from "../API/fetching";
//import { getRecipesList } from "../actions/recipesActions";
export const filterByTag = (tag) => ({
  type: "FILTER_TAG",
  tag,
});

export const filterBySearch = (searchValue) => ({
  type: "SEARCH",
  searchValue,
});
export const filterdRecipes = (recipes = []) => ({
  type: "FILTER_RECIPES",
  recipes,
});

export const filterRecipesByTag = (tag) => {
  return (dispatch, getState) => {
    let existingRecipes = getState().recipes.recipes;
    dispatch(filterdRecipes(existingRecipes));
    dispatch(filterByTag(tag));

    const currArray = getState().filters.filtered;

    const filteredRecipes = currArray.filter((recipe) => recipe[tag]);

    tag !== "empty"
      ? dispatch(filterdRecipes(filteredRecipes))
      : dispatch(filterdRecipes(existingRecipes));
  };
};
