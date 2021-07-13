import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import Header from "../components/Header";

// We rename coponent bcs we are rerendering it in this jsx
const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  path,
  ...props
}) => {
  return (
    <Route
      {...props}
      component={(props) =>
        isAuthenticated ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);
