import React from "react";

import PenguinSlide from "./../components/PenguinSlide/PenguinSlide";
import PenguinCard from "./../components/PenguinCard/PenguinCard";
import PenguinButton from "./../components/PenguinButton/PenguinButton";

const HomePage = () => {
  return (
    <>
      <h2>Esta es la home page</h2>
      <PenguinSlide />
      <PenguinCard urlImagen = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" tipo = "planta" nombre= "Pinguino de planta"/>
    </>
  );
};

export default HomePage;