import React from "react";
import "./CatCard.css";
import CatButton from "../CatButton/CatButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CatCard = ({ urlImagen, id, breed, description, fnc = () => { } }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const checkFav = () => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify({}));
    }

    if (
      JSON.parse(localStorage.getItem("favorites"))[id] !== undefined &&
      !isFavorite
    ) {
      setIsFavorite(true);
    }
  };

  checkFav();

  const addFavorite = () => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify({}));
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
    fnc(favorites);
  };

  let shortDescription = description.split(".");
  shortDescription = shortDescription[0].lenght > 10 ? shortDescription[0].slice(0, 10) : shortDescription[0]

  return (
    <div className={`card`}>
      <div className="card-favorite">
        {isFavorite ? (
          <CatButton
            color="btn-favorite"
            text={<i className="fa-solid fa-heart"></i>}
            onClick={removeFavorite}
          />
        ) : (
          <CatButton
            color="btn-favorite"
            text={<i className="fa-regular fa-heart"></i>}
            onClick={addFavorite}
          />
        )}
      </div>
      <img src={urlImagen} alt={breed} />
      <h3>{breed}</h3>
      <h5>{shortDescription}.</h5>
      <CatButton
        text="Adóptame"
        onClick={() => navigate(`/adopt?breed=${breed}&image=${urlImagen}`)}
        color="btn-adopt"
      />
    </div>
  );
};

export default CatCard;