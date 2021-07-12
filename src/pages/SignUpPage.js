import SignUpForm from "../components/SignUpForm";
import Container from "../components/Container";
import dish from "../imgs/dish.png";

const SignUpPage = () => {
  return (
    <>
      <div className="signup">
        <Container className="signup__bg">
          <div className="signup__logo">
            <p>CookBook</p>
          </div>
          <h1>Sign Up</h1>
          <p>Sign up to have access to all the recipes and functionalities</p>
          <SignUpForm />
        </Container>
        <img className="signup__bg-img" src={dish} alt="dish" />
      </div>
    </>
  );
};

export default SignUpPage;
