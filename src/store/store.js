import { createStore, combineReducers, applyMiddleware } from "redux";
import { recipiesReducer } from "./recipiesReducer";
import { mealsReducer } from "./mealsReducer";
import { filtersReducer } from "./filtersReducer";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers(
    {
      recipies: recipiesReducer,
      meals: mealsReducer,
      filters: filtersReducer,
      auth: authReducer,
    },
    applyMiddleware(thunk)
  )
);
