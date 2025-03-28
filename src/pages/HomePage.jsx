import { useContext } from "react";
import CatSlide from "./../components/CatSlide/CatSlide";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";
import "./page.css";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === 'light' ? 'container-home' : 'container-home dark-mode'}`}>
      <h1>ADOPT A MININO</h1>
      <h4>💞¡Ellos están esperándote!💞</h4>
      <CatSlide />
    </div>
  );
};

export default HomePage;