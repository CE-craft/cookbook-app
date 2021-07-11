//import { getRecipiesSearch } from "../API/fetching";
import { getRecipesList } from "../actions/recipesActions";
export const filterByTag = (tag) => ({
  type: "FILTER_TAG",
  tag,
});

export const filterBySearch = (searchValue) => ({
  type: "SEARCH",
  searchValue,
});

export const filterRecipesByTag = (tag) => {
  return (dispatch, getState) => {
    console.log(tag);
    dispatch(filterByTag(tag));
    const [...existingRecipes] = getState().recipes.recipes;
    console.log(existingRecipes);
    const filteredRecipes = existingRecipes.filter((recipe) => !recipe[tag]);
    //console.log(filteredRecipes);
    tag !== "empty"
      ? dispatch(getRecipesList(filteredRecipes))
      : dispatch(getRecipesList(existingRecipes));
  };
};
