import { Link, NavLink } from "react-router-dom";
import PenguinButton from "../PenguinButton/PenguinButton";
import "./NavBar.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`${theme === 'light' ? '' : 'dark-mode'}`}>
      <Link to="/">
        <PenguinButton text={<img src="./favicon.png" />} color="btn btn-logo " />{" "}
      </Link>
      <div className="navlinks">
        <NavLink to="/adopt"><PenguinButton text="ADÓPTAME" color="btn-nav btn" />{" "} </NavLink>
        <NavLink to="/favorite"><PenguinButton text="FAVORITO" color="btn-nav btn" />{" "} </NavLink>
        <label for="toggleSlider" id="sliderLabel">{theme === 'light' ? "🌞" : "🌙"} </label>
        <input type="checkbox" id="toggleSlider" onClick={toggleTheme} />
      </div>
    </nav>
  );
};

export default NavBar;