import { Link, NavLink } from "react-router-dom";
import PenguinButton from "../PenguinButton/PenguinButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <img src="./public/favicon.png" />
      <div className="navlinks">
        <Link to="/">
          <PenguinButton text="HOME"/>{" "}
        </Link>
        <NavLink to="/adopt"><PenguinButton text="ADÓPTAME" color="btn-nav" />{" "} </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
