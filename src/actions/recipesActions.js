import { getRecipesListData } from "../API/fetching";

export const getRecipesList = (recipes = [], recipesPerPage) => ({
  type: "GET_RECIPIES",
  recipes,
  recipesPerPage,
});

export const loadRecipesList = (recipesPerPage) => {
  console.log("loadRecipesList");
  return async (dispatch) => {
    const data = await getRecipesListData(recipesPerPage);
    console.log(data);
    dispatch(getRecipesList(data.recipes, recipesPerPage));
  };
};
