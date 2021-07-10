import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "./store/store";
//import { realData, getMealsData } from "./firebase/firebase";
import "./styles/main.scss";
//////////////////////////////////////////////////////////
import firebase from "firebase/app";
import { logout, login } from "./actions/authActions";
import { getRecipesListData } from "./API/fetching";
import { getRecipesList } from "./actions/recipesActions";
import { loadUserMeals } from "./actions/mealsActions";
//getMealsData("cH3UWztRgOS4HjerFRnzLl4CJIB2");
//realData();

const attemptAcion = async () => {
  const data = await getRecipesListData();
  //console.log(data);

  store.dispatch(getRecipesList(data.recipes, 10));
};

attemptAcion();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged IN");
    store.dispatch(login(user.uid));
    store.dispatch(loadUserMeals());
    console.log("Store state after login", store.getState());
  } else {
    console.log("Logged OUT");
    store.dispatch(logout());
    history.push("/");
  }
});

reportWebVitals();
