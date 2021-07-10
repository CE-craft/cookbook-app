import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { recipesReducer } from "./recipesReducer";
import { mealsReducer } from "./mealsReducer";
import { filtersReducer } from "./filtersReducer";
import { authReducer } from "./authReducer";
import { holdRecipeReducer } from "./holdRecipeReducer";
import { deletingrecipeRuducer } from "./deletingrecipeRuducer";

export const store = createStore(
  combineReducers({
    recipes: recipesReducer,
    meals: mealsReducer,
    filters: filtersReducer,
    holdrecipe: holdRecipeReducer,
    auth: authReducer,
    deletingrecipe: deletingrecipeRuducer,
  }),
  applyMiddleware(thunk)
);
