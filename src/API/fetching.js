import { store } from "../store/store";

const API_KEY = "?apiKey=3e1586a919c94e7e9b20c857454d27ef";
const RECIPIES_DEFAULT = 50;

// //https://spoonacular.com/food-api/docs#Authentication
// // https://spoonacular.com/food-api

//const data = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=3e1586a919c94e7e9b20c857454d27ef" );

// random recipies : https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

const getJson = async (link) => {
  const promise = await fetch(link);
  const fullfiled = await promise.json();

  return fullfiled;
};

export const fetchingWidgets = async (id) => {
  const widgets = await Promise.all([
    getJson(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json${API_KEY}`
    ),
    getJson(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json${API_KEY}`
    ),
  ]);

  console.log("Widgets fetching", widgets);
  console.log("After widget fetching", store.getState());

  return widgets;
};

export const getRecipesListData = async (recipesNum = RECIPIES_DEFAULT) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random${API_KEY}&number=${recipesNum}`
  );

  const recipesData = await data.json();
  console.log("Recipes data list :", recipesData);

  // recipesData.recipes.forEach(async (recipe) => {
  //   const widgets = await fetchingWidgets(recipe.id);
  //   recipe.widgets = { ...widgets };
  // });
  // console.log(recipesData);

  return recipesData;
};

export const getRecipe = async (id) => {
  const recipe = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information${API_KEY}`
  );
  const recipieInfo = await recipe.json();
  return recipieInfo;
};

//

export const getRecipiesByTag = async (tag) => {
  const fetchRecipe = await fetch(
    `https://api.spoonacular.com/recipes/random${API_KEY}&number=${RECIPIES_DEFAULT}&tags=${tag}`
  );
  const recipes = await fetchRecipe.json();

  return recipes;
};

//https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert
//https://api.spoonacular.com/recipes/complexSearch${API_KEY}&query=chick

export const getRecipiesSearch = async (query) => {
  const fetchRecipes = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch${API_KEY}&query=${query}&number=${RECIPIES_DEFAULT}`
  );

  const recipes = await fetchRecipes.json();

  return recipes.results;
};
