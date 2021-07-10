const API_KEY = "?apiKey=3e1586a919c94e7e9b20c857454d27ef";
const RECIPIES_DEFAULT = 10;
// //https://spoonacular.com/food-api/docs#Authentication
// // https://spoonacular.com/food-api

//const data = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=3e1586a919c94e7e9b20c857454d27ef" );

// random recipies : https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

export const getRecipesListData = async (recipesNum = RECIPIES_DEFAULT) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random${API_KEY}&number=${recipesNum}`
  );

  const recipesData = await data.json();
  //console.log(recipesData);

  return recipesData;
};

export const getRecipe = async (id) => {
  const recipe = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information${API_KEY}`
  );
  const recipieInfo = await recipe.json();
  return recipieInfo;
};
