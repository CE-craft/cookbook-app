import { connect } from "react-redux";
import { startLogin } from "../actions/authActions";

const LoginForm = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const user = { email, password };

    props.startLogin(user);
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
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user)),
});
export default connect(null, mapDispatchToProps)(LoginForm);
