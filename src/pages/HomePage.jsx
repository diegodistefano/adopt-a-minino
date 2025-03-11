import React from "react";

import PenguinSlide from "./../components/PenguinSlide/PenguinSlide";
import PenguinCard from "./../components/PenguinCard/PenguinCard";
import PenguinButton from "./../components/PenguinButton/PenguinButton";

const HomePage = () => {
  return (
    <>
      <h2>Esta es la home page</h2>
      <PenguinSlide />
      <PenguinCard />
      <PenguinButton text='adoptame' onClick={() => { console.log('hola'); }} />
    </>
  );
};

export default HomePage;