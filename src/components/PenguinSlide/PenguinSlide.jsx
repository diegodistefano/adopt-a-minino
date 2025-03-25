import React, { useState, useEffect } from "react";
import "./PenguinSlide.css";
import { getPenguins } from "../../service/penguinService";
import PenguinCard from "../PenguinCard/PenguinCard.jsx";
import PenguinButton from "../PenguinButton/PenguinButton.jsx";

const PenguinSlide = () => {
  const [dataPenguin, setDataPenguin] = useState([]);
  const [indexImage, setIndexImage] = useState(0);
  const [penguinDisplayed, setPenguinDisplayed] = useState([]);
  const [favorites, setFavorites] = useState({}); // 🔥 Nuevo estado para favoritos

  useEffect(() => {
    const loadData = async () => {
      const dataPenguin = await getPenguins();
      setDataPenguin(dataPenguin);
      setPenguinDisplayed(dataPenguin.slice(indexImage, indexImage + 3));
      setIndexImage(indexImage + 3);

      // 🔥 Cargar favoritos desde localStorage
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
      setFavorites(storedFavorites);
    };

    if (indexImage === 0) {
      loadData();
    }
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
        <PenguinButton text={<i className="fa-solid fa-caret-left"></i>} onClick={previousImages} color="button-arrows btn" />
      ) : (
        <div className="fill-button">
          <i className="fa-solid fa-caret-left"></i>
        </div>
      )}
      <div className="container-carrusel">
        {penguinDisplayed.map((penguin) => (
          <PenguinCard
            key={penguin.id} // 🔥 Agregamos `key`
            urlImagen={penguin.url}
            id={penguin.id}
            favorites={favorites} // 🔥 Pasamos favoritos como prop
            setFavorites={setFavorites} // 🔥 Pasamos función para actualizar favoritos
          />
        ))}
      </div>
      {indexImage < dataPenguin.length ? (
        <PenguinButton text={<i className="fa-solid fa-caret-right"></i>} onClick={nextImages} color="button-arrows btn" />
      ) : (
        <div className="fill-button">
          <i className="fa-solid fa-caret-right"></i>
        </div>
      )}
    </div>
  );
};

export default PenguinSlide;
