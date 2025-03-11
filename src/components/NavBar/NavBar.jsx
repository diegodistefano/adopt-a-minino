import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <Link to="/">Home   </Link>
        <NavLink to="/adopt">Adoptame   </NavLink>
      </nav>
    );
}

export default NavBar;