import React from "react";
import PenguinSlide from "./../components/PenguinSlide/PenguinSlide";

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