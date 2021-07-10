import { getRecipe } from "../API/fetching";
import { firebaseData } from "../firebase/firebase";
import { loadUserMeals } from "./mealsActions";
//import { store } from "../store/store";

export const holdRecipe = (recipe = {}) => ({
  type: "HOLD_RECIPE",
  recipe,
});

export const holdRecipeStore = (id) => {
  return async (dispatch) => {
    const recipe = await getRecipe(id);
    dispatch(holdRecipe(recipe));
  };
};

export const saveRecipe = () => ({
  type: "SAVE_RECIPE",
});

export const saveRecipeFirebase = (recipe, uid, meal) => {
  return async (dispatch) => {
    try {
      const recipeRef = await firebaseData.ref(
        `users/${uid}/meals/${meal}/recipes`
      );
      const existingRecipiesSnap = await recipeRef.once("value");
      const existingRecipies = Object.keys(existingRecipiesSnap.val());
      console.log(existingRecipies);

      if (existingRecipies.includes(recipe.id.toString())) {
        throw new Error("Recipie already exists in this meal plan");
      }

      const addedRecipe = await firebaseData
        .ref(`users/${uid}/meals/${meal}/recipes`)
        .push(recipe);

      /////////////////////////////////////////////////////////////////////////////////////////////////
      /* ****************************CHANGE PUSH ID TO RECIPE ID******************************* */

      const recipesRefSnapshot = await recipeRef
        .child(addedRecipe.key)
        .once("value");
      const currentRecipe = recipesRefSnapshot.val();

      const userRecipe = {};
      userRecipe[addedRecipe.key] = null;
      userRecipe[recipe.id.toString()] = { ...currentRecipe, isSaved: true };
      console.log(userRecipe[recipe.id.toString()]);
      await recipeRef.update(userRecipe);

      dispatch(loadUserMeals());
    } catch (error) {
      console.log(error);
    }
  };
};
