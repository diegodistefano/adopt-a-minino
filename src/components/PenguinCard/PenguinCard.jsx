import React from "react";
import "./PenguinCard.css";
import PenguinButton from "../PenguinButton/PenguinButton";
import { useState } from "react";


const PenguinCard = ({ urlImagen, id, breed, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const checkFav = () => {
    if (localStorage.getItem('favorites') === null) {
      localStorage.setItem('favorites', JSON.stringify({}));
    }

    if ((JSON.parse(localStorage.getItem('favorites'))[id] !== undefined) && !isFavorite) {
      setIsFavorite(true);
    }
  }

  checkFav();
  const addFavorite = () => {
    if (localStorage.getItem('favorites') === null) {
      localStorage.setItem('favorites', JSON.stringify({}));
    }

    const favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites[id] = { 'urlImagen': urlImagen, 'breed': breed, 'description': description };
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(true);
  };

  const removeFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    delete favorites[id];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(false);
  };

  const shortDescription = description.split('.');

  return (
    <div className={`card`}>
      <div className="card-favorite">
        {isFavorite ?
          <PenguinButton
            color="btn-favorite"
            text={<i class="fa-solid fa-heart"></i>}
            onClick={removeFavorite}
          />
          :
          <PenguinButton
            color="btn-favorite"
            text={<i class="fa-regular fa-heart"></i>}
            onClick={addFavorite}
          />
        }
      </div>
      <img src={urlImagen} />
      <h3>{breed}</h3>
      <h5>{shortDescription[0]}.</h5>
      <PenguinButton
        text="Adoptame"
        onClick={() => {
          console.log("hola");
        }}
      />
    </div>
  );
};

export default PenguinCard;