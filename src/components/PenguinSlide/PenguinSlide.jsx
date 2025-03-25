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

    if (indexImage > 0) {
      return;
    }
    loadData();
  }, []);

  const nextImages = () => {
    setPenguinDisplayed(dataPenguin.slice(indexImage, indexImage + 3));
    setIndexImage(indexImage + 3);
  };

  const previousImages = () => {
    setPenguinDisplayed(dataPenguin.slice(indexImage - 6, indexImage - 3));
    setIndexImage(indexImage - 3);
  };


  return (
    <div className="container-buttons">
      {indexImage > 3 ? (
        <PenguinButton text={<i class="fa-solid fa-caret-left"></i>} onClick={previousImages} color="button-arrows btn" />
      ) : (
        <div className="fill-button">
          <i class="fa-solid fa-caret-left"></i>
        </div>
      )}
      <div className="container-carrusel">
        {penguinDisplayed.map((penguin) => (
          <>
            <PenguinCard
              urlImagen={penguin.url}
              id={penguin.id}
            />
          </>
        ))}
      </div>
      {indexImage < dataPenguin.length ? (
        <PenguinButton text={<i class="fa-solid fa-caret-right"></i>} onClick={nextImages} color="button-arrows btn" />
      ) : (
        <div className="fill-button">
          <i class="fa-solid fa-caret-right"></i>
        </div>
      )}
    </div>
  );
};

export default PenguinSlide;