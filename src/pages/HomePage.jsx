import { useContext } from "react";
import PenguinSlide from "./../components/PenguinSlide/PenguinSlide";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === 'light' ? 'container-home' : 'container-home dark-mode'}`}>
      <h2>Adopta un minino</h2>
      <h4>💞¡Ellos están esperándote!💞</h4>
      <PenguinSlide />
    </div>
  );
};

export default HomePage;