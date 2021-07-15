import { connect } from "react-redux";
import { requestAccountCreation } from "../actions/authActions";
import { history } from "../helpers/history";
//import { useState } from "react";
import validator from "validator";
import { catchError, hideError } from "../actions/errorActions";
//import { store } from "../store/store";
import { getUsersEmails } from "../firebase/firebase";

const SignUpForm = (props) => {
  // const [containError, setError] = useState("");

  const signInHandler = async (e) => {
    try {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const confirmPassword = e.target.elements.confirmPassword.value;

      const usersEmails = await getUsersEmails();

      if (!validator.isEmail(email)) {
        throw new Error("Invalid email");
      } else if (password !== confirmPassword || password.length < 8) {
        throw new Error(
          "Re-enter same password and it should be more than 8 characters"
        );
      } else if (usersEmails.includes(email)) {
        throw new Error("Email already exist please login");
      } else if (
        validator.isEmail(email) &&
        password === confirmPassword &&
        password.length >= 8
      ) {
        props.requestAccountCreation({ email, password });
        history.push("/");
      }
    } catch (error) {
      // setError(error);
      // console.log("form", error);
      const newError = error.toString();
      props.catchError(newError);
      setTimeout(() => props.hideError(), 8000);

      //console.log(error);
    }

    //console.log(store.getState());
  };

  return (
    <form className="signup__form" onSubmit={signInHandler}>
      <input
        className="input-field"
        placeholder="Email"
        type="text"
        required
        name="email"
      />
      <input
        className="input-field"
        placeholder="Password"
        type="password"
        required
        name="password"
      />
      <input
        className="input-field"
        type="password"
        required
        name="confirmPassword"
        placeholder="Renter password"
      />
      <button className="btn-main btn-main--black">Sign Up</button>
      <div className={props.errors ? "error__form" : "hidden"}>
        {props.errors.error ? props.errors.error : ""}
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAccountCreation: (user) => dispatch(requestAccountCreation(user)),
    catchError: (error) => dispatch(catchError(error)),
    hideError: () => dispatch(hideError()),
  };
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
