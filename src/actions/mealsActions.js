import { firebaseData } from "../firebase/firebase";
import { getMealsData } from "../firebase/firebase";

export const getMeals = (meals = {}) => ({
  type: "GET_MEALS",
  meals,
});

export const loadUserMeals = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;

      const meals = await getMealsData(uid);

      dispatch(getMeals(meals));
    } catch (error) {
      //console.log("Cant Load User meals from firebase", error);
    }
  };
};

export const removeUserRecipe = (recipe) => {
  const { id, meal } = recipe;
  return async (dispatch, getState) => {
    try {
      console.log("Deleting Recipe", meal, id);
      const uid = getState().auth.uid;

      const mealExist = await firebaseData
        .ref(`users/${uid}/meals/${meal}/recipes`)
        .once("value");

      const mealExistValue = await mealExist.val();
      const mealsLeft = Object.keys(mealExistValue);

      if (mealsLeft.length === 1) {
        await firebaseData
          .ref(`users/${uid}/meals/${meal}`)
          .set({ recipes: "recipe" });
      } else {
        await firebaseData
          .ref(`users/${uid}/meals/${meal}/recipes/${id}`)
          .set(null);
      }

      dispatch(loadUserMeals());
    } catch (error) {
      console.log("Cant remove recipe", error);
    }
  };
};
