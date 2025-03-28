import { Link, NavLink } from "react-router-dom";
import CatButton from "../CatButton/CatButton";
import "./NavBar.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`${theme === 'light' ? '' : 'dark-mode'}`}>
      <Link to="/">
        <CatButton text={<img src="./favicon.png" />} color="btn btn-logo " />{" "}
      </Link>
      <div className="navlinks">
        <NavLink to="/adopt"><CatButton text="ADÓPTAME" color="btn-nav btn" />{" "} </NavLink>
        <NavLink to="/favorite"><CatButton text="FAVORITO" color="btn-nav btn" />{" "} </NavLink>
        <div id="themeSlider">
          <label htmlFor="toggleSlider" id="sliderLabel">{theme === 'light' ? "🌞" : "🌙"} </label>
          <input type="checkbox" id="toggleSlider" onClick={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;