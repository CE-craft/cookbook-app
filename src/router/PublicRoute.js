import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

// We rename coponent bcs we are rerendering it in this jsx
const PublicRoute = ({
  isAuthenticated,
  component: Component,
  path,
  ...props
}) => {
  return (
    <Route
      {...props}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/recipeslist" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);
