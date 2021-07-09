import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/authActions";

const Header = () => {
  const logoutHandler = (e) => {
    e.preventDefault();
    startLogout();
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">CookBook</div>
        <ul className="header__links">
          <li>
            <NavLink to="/recipeslist">List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
