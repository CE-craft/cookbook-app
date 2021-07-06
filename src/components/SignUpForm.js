import { connect } from "react-redux";
import { requestAccountCreation } from "../actions/authActions";

const SignUpForm = (props) => {
  const signInHandler = (e) => {
    try {
      e.preventDefault();
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const confirmPassword = e.target.elements.confirmPassword.value;
      if (password === confirmPassword) {
        props.requestAccountCreation({ email, password });
      } else {
        const errorMsg = "Wrong password rewrite the same one";
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={signInHandler}>
      <input type="email" required name="email" />
      <input type="password" required name="password" />
      <input type="password" required name="confirmPassword" />
      <button>Sign in</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAccountCreation: (user) => dispatch(requestAccountCreation(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
