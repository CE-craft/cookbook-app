import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header class="header">
        <div class="header__logo">CookBook</div>
        <ul class="header__links">
          <li>
            <NavLink to="/recipeslist">List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>Logout</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
