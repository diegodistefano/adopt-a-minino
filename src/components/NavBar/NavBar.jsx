import { Link, NavLink } from "react-router-dom";
import PenguinButton from "../PenguinButton/PenguinButton";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><PenguinButton text='Home' />    </Link>
      <NavLink to="/adopt">Adoptame   </NavLink>
    </nav>
  );
}

export default NavBar;