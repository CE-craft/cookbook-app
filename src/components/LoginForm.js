import { connect } from "react-redux";
import { catchError, hideError } from "../actions/errorActions";
import { startLogin } from "../actions/authActions";
import { getUsersEmails } from "../firebase/firebase";
import validator from "validator";

const LoginForm = (props) => {
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const user = { email, password };

      const usersEmails = await getUsersEmails();

      if (!validator.isEmail(email)) {
        throw new Error("Invalid email");
      }

      if (!usersEmails.includes(email)) {
        throw new Error("This email doesn't exist please Signup");
      }

      props.startLogin(user);
    } catch (error) {
      const newError = error.toString();
      props.catchError(newError);
      setTimeout(() => props.hideError(), 8000);
    }
  };
  return (
    <form className="login__form" onSubmit={onSubmitHandler}>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        name="email"
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        name="password"
      />
      <button className="btn-main btn-main--black">Login</button>
      <div className={props.errors.error ? "error__form" : "hidden"}>
        {props.errors.error ? props.errors.error : ""}
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user)),
  catchError: (error) => dispatch(catchError(error)),
  hideError: () => dispatch(hideError()),
});

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
