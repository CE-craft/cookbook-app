import { connect } from "react-redux";
import { startLogin } from "../actions/authActions";

const LoginForm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const user = { email, password };
    console.log(user);
    props.startLogin(user);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Login</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user)),
});
export default connect(null, mapDispatchToProps)(LoginForm);
