import "./header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
