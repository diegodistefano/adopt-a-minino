import React from "react";
import PenguinSlide from "./../components/PenguinSlide/PenguinSlide";
import PenguinCard from "./../components/PenguinCard/PenguinCard";
import PenguinButton from "./../components/PenguinButton/PenguinButton";

const HomePage = () => {
  return (
    <div className="container-home">
      <h2>Adopta un minino</h2>
      <h4>💞¡Ellos están esperándote!💞</h4>
      <PenguinSlide />
    </div>
  );
};

export default HomePage;