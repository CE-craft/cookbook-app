import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import dish from "../imgs/dish.png";

//import SubHeader from "../components/SubHeader";

const LoginPage = () => {
  // heading="Welcome to the CookBook"
  // description="Search, find and save your favorite recipes to diversify your daily meals."

  return (
    <>
      <div className="login__page">
        <div className="login-start">
          <div className="login-start__text-block">
            <div>
              <h1>Welcome to the CookBook</h1>
              <p>
                Search, find and save your favorite recipes to diversify your
                daily meals.
              </p>
            </div>
            <div className="social-media">
              <p>Facebook</p> <p>Instagram</p> <p>Twitter</p>
            </div>
          </div>
          <img className="login-start__img" src={dish} alt="dish" />
        </div>
        <div className="login">
          <div className="login__logo">
            <p>CookBook</p>
          </div>
          <h1>Login</h1>
          <p>Use your email and password to access</p>
          <LoginForm />
          <p>You don't have an account</p>
          <Link className="login__link" to="/signup">
            Create account
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
