import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { realData } from "./firebase/firebase";
import "./styles/main.scss";
//////////////////////////////////////////////////////////
import { getRecipesListData } from "./API/fetching";
import { loadRecipesList, getRecipesList } from "./actions/recipesActions";

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
  console.log(store.getState());
}, 3000);

reportWebVitals();
