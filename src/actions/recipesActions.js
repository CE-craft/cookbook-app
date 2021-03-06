import { getRecipesListData, getRecipiesSearch } from "../API/fetching";
import { filterdRecipes } from "./filterActions";

export const getRecipesList = (recipes = []) => ({
  type: "GET_RECIPIES",
  recipes,
});

export const loadRecipesList = () => {
  return async (dispatch) => {
    const data = await getRecipesListData();

    dispatch(getRecipesList(data.recipes));
  };
};

export const getRecipesBySearch = () => {
  return async (dispatch, getState) => {
    const seachValue = getState().filters.search;

    const recipiesData = await getRecipiesSearch(seachValue);
    console.log(recipiesData);
    dispatch(getRecipesList(recipiesData));
    dispatch(filterdRecipes(recipiesData));
  };
};
