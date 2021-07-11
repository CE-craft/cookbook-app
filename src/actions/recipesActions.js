import { getRecipesListData, getRecipiesSearch } from "../API/fetching";

export const getRecipesList = (recipes = []) => ({
  type: "GET_RECIPIES",
  recipes,
});

export const loadRecipesList = (recipes) => {
  console.log("loadRecipesList");
  return async (dispatch, getState) => {
    const data = await getRecipesListData(recipes);
    console.log(data);
    dispatch(getRecipesList(data.recipes));
    console.log("Recipies after fetching", getState().recipes);
  };
};

export const getRecipesBySearch = () => {
  return async (dispatch, getState) => {
    const seachValue = getState().filters.search;
    console.log(seachValue);
    const recipiesData = await getRecipiesSearch(seachValue);
    dispatch(getRecipesList(recipiesData));
  };
};
