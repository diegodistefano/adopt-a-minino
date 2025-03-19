import { Link, NavLink } from "react-router-dom";
import PenguinButton from "../PenguinButton/PenguinButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <PenguinButton text={<img src="./public/favicon.png" />} color="btn btn-logo " />{" "}
      </Link>
      <div className="navlinks">
        <NavLink to="/adopt"><PenguinButton text="ADÓPTAME" color="btn-nav btn" />{" "} </NavLink>
        <NavLink to="/favorite"><PenguinButton text="FAVORITO" color="btn-nav btn" />{" "} </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;