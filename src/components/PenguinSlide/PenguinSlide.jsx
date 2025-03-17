import React from "react";
import "./PenguinSlide.css";
import { useState, useEffect } from "react";
import { getPenguins } from "../../service/penguinService";
import PenguinCard from "../PenguinCard/PenguinCard.jsx";
import PenguinButton from "../PenguinButton/PenguinButton.jsx";

const PenguinSlide = () => {
  const [dataPenguin, setDataPenguin] = useState([]);
  const [indexImage, setIndexImage] = useState(0);
  const [penguinDisplayed, setPenguinDisplayed] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataPenguin = await getPenguins();
      setDataPenguin(dataPenguin);

      setPenguinDisplayed(dataPenguin.slice(indexImage, indexImage + 3));
      setIndexImage(indexImage + 3);
      
    };

    if(indexImage > 0){
      return;
    }
    loadData();
  }, []);

  const nextImages = () => {
    setPenguinDisplayed(dataPenguin.slice(indexImage, indexImage + 3));
    setIndexImage(indexImage + 3);
  }

  const previousImages = () => {
    // const index = indexImage - 3;
    setPenguinDisplayed(dataPenguin.slice(indexImage - 6, indexImage - 3));
    setIndexImage(indexImage - 3);
  }

  return (
    <div className="container-carrusel">
      {indexImage > 3 ? <PenguinButton text="previous" onClick={previousImages}/> : "" }

      {penguinDisplayed.map((penguin) => (
        <>
        <PenguinCard urlImagen = {penguin.url} tipo = "planta" nombre= "Pinguino de planta"/>
        </>
      ))}
      {indexImage < (dataPenguin.length) ? <PenguinButton text="next" onClick={nextImages}/> : "" }

    </div>
  
  );
};

export default PenguinSlide;