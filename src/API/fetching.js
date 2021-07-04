const API_KEY = "?apiKey=3e1586a919c94e7e9b20c857454d27ef";
// //https://spoonacular.com/food-api/docs#Authentication
// // https://spoonacular.com/food-api

export const getData = async () => {
  //const data = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=3e1586a919c94e7e9b20c857454d27ef" );

  // random recipies : https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert

  const data = await fetch(
    `https://api.spoonacular.com/recipes/random${API_KEY}&number=10`
  );

  const recipiesData = await data.json();
  console.log(recipiesData);
  return recipiesData;
};
