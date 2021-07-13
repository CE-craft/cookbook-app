import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
//import MealPage from "../pages/MealPage";
import RecipePage from "../pages/RecipePage";
import NotFound from "../pages/NotFound";
import { history } from "../helpers/history";
//import Header from "../components/Header";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = (props) => {
  // const currentHistory = history.location.pathname;
  return (
    <Router history={history}>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PrivateRoute path="/recipe/:id" component={RecipePage} />
        <PrivateRoute path="/recipeslist" component={ListPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
