import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MealPage from "../pages/MealPage";
import RecipiePage from "../pages/RecipiePage";
import NotFound from "../pages/NotFound";
import { history } from "../helpers/history";

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/recipie/:id" component={RecipiePage} />
        <Route path="/meal/:id" component={MealPage} />
        <Route path="/recipieslist" component={ListPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
