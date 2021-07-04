import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <LoginForm />
        <p>You don't have an account</p>
        <Link to="/signup">Create account</Link>
      </div>
    </>
  );
};

export default LoginPage;
