const LoginForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="email" />
      <input type="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
