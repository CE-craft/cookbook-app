import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MealPage from "../pages/MealPage";
import RecipePage from "../pages/RecipePage";
import NotFound from "../pages/NotFound";
import { history } from "../helpers/history";
import Header from "../components/Header";

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/recipe/:id" component={RecipePage} />
        <Route path="/meal/:id" component={MealPage} />
        <Route path="/recipeslist" component={ListPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
