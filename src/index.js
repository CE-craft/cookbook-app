import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles/main.scss";
//////////////////////////////////////////////////////////
import firebase from "firebase/app";
import { logout, login } from "./actions/authActions";

import { loadUserMeals } from "./actions/mealsActions";
import { loadRecipesList } from "./actions/recipesActions";

//getMealsData("cH3UWztRgOS4HjerFRnzLl4CJIB2");
//realData();

// const loadList = async () => {
//   const data = await getRecipesListData();
//   //console.log(data);

//   store.dispatch(getRecipesList(data.recipes));
// };

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

const renderData = async () => {
  await store.dispatch(loadRecipesList());
  renderApp();
  if (history.location.pathname === "/") {
    history.push("/recipeslist");
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //console.log("Logged IN");

    store.dispatch(login(user.uid));
    store.dispatch(loadUserMeals());
    renderData();
    //console.log("Store state after login", store.getState());
  } else {
    // console.log("Logged OUT");
    renderApp();
    store.dispatch(logout());
    history.push("/");
  }
});

reportWebVitals();
