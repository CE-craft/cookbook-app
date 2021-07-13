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

let existingRecipes = [];
export const filterRecipesByTag = (tag) => {
  return (dispatch, getState) => {
    console.log(tag);
    dispatch(filterByTag(tag));

    existingRecipes = getState().recipes.recipes;
    const currArray = [...existingRecipes];
    console.log(existingRecipes);
    const filteredRecipes = currArray.filter((recipe) => !recipe[tag]);
    //console.log(filteredRecipes);
    tag !== "empty"
      ? dispatch(getRecipesList(filteredRecipes))
      : dispatch(getRecipesList(existingRecipes));
  };
};
