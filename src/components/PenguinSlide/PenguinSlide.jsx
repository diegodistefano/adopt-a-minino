import React from "react";
import "./PenguinSlide.css";
import { useState, useEffect } from "react";
import { getPenguins } from "../../service/penguinService";
import PenguinCard from "../PenguinCard/PenguinCard.jsx";

const PenguinSlide = () => {
  const [dataPenguin, setDataPenguin] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataPenguin = await getPenguins();
      setDataPenguin(dataPenguin);
    };
    loadData();
  }, []);

  return (
    <div className="container-carrusel">
      {dataPenguin.map((penguin) => (
        <>
        <PenguinCard urlImagen = {penguin.url} tipo = "planta" nombre= "Pinguino de planta"/>
        </>
      ))}
    </div>
  );
};

export default PenguinSlide;
