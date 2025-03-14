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
    console.log(penguinDisplayed);
    setPenguinDisplayed(dataPenguin.slice(indexImage, indexImage + 3));
    setIndexImage(indexImage + 3);
    console.log(penguinDisplayed);
  }

  return (
    <div className="container-carrusel">
      {penguinDisplayed.map((penguin) => (
        <>
        <PenguinCard urlImagen = {penguin.url} tipo = "planta" nombre= "Pinguino de planta"/>
        </>
      ))}
      <PenguinButton text="next" onClick={nextImages}/>
    </div>
  );
};

export default PenguinSlide;