import { getMealsData } from "../firebase/firebase";

export const getMeals = (meals = {}) => ({
  type: "GET_MEALS",
  meals,
});

export const loadUserMeals = (uid) => {
  return async (dispatch) => {
    const meals = await getMealsData(uid);
    console.log(meals);
    dispatch(getMeals(meals));
  };
};
