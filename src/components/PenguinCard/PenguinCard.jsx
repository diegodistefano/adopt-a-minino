import React from "react";
import "./PenguinCard.css";
import PenguinButton from "../PenguinButton/PenguinButton";



const PenguinCard = ({ urlImagen, id }) => {

  const addFavorite = () => { 
    const cardInfo = {[id]: urlImagen};
    console.log(cardInfo);
    // localStorage.setItem("favorites", JSON.stringify(cardInfo));
  };

  return (
    <div className={`card`}>
      <div className="card-favorite">
        <PenguinButton
          color="btn-favorite"
          text={<i class="fa-solid fa-heart"></i>}
          // text={`${favoritePenguin === false ? '<i class="fa-regular fa-heart"></i>' : '<i class="fa-solid fa-heart"></i>'}`}
          onClick={addFavorite}
        />
      </div>
      <img src={urlImagen} />
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