import React, { useState, useEffect } from "react";
import "./PenguinCard.css";
import PenguinButton from "../PenguinButton/PenguinButton.jsx";

const PenguinCard = ({ urlImagen, id, favorites, setFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites[id] !== undefined);
  }, [favorites, id]);

  const addFavorite = () => {
    const newFavorites = { ...favorites, [id]: urlImagen };
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const removeFavorite = () => {
    const newFavorites = { ...favorites };
    delete newFavorites[id];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (
    <div className="card">
      <div className="card-favorite">
        <PenguinButton
          color={isFavorite ? "btn-favorite active" : "btn-favorite"} // 🔥 Cambiamos la clase
          text={<i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>}
          onClick={isFavorite ? removeFavorite : addFavorite}
        />
      </div>
      <img src={urlImagen} alt="Penguin" />
      <PenguinButton text="Adoptame" onClick={() => console.log("hola")} />
    </div>
  );
};

export default PenguinCard;