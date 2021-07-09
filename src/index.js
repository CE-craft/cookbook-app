import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { realData } from "./firebase/firebase";
import "./styles/main.scss";
//////////////////////////////////////////////////////////
import firebase from "firebase/app";
import { logout } from "./actions/authActions";
import { getRecipesListData } from "./API/fetching";
import { getRecipesList } from "./actions/recipesActions";
import { loadUserMeals } from "./actions/mealsActions";

realData();

const attemptAcion = async () => {
  const data = await getRecipesListData();
  console.log(data);
  // //loadRecipesList();
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
setTimeout(() => {
  console.log("Store state", store.getState());
}, 3000);

firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    console.log("Logged IN");
    await loadUserMeals(user.uid);
    console.log(user.uid);
  } else {
    console.log("Logged OUT");
    store.dispatch(logout());
    history.push("/");
  }
});

reportWebVitals();
