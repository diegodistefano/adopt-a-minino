import React from "react";
import "./PenguinCard.css";
import PenguinButton from "../PenguinButton/PenguinButton";

const PenguinCard = ({ urlImagen, nombre, tipo }) => {
  return (
    <div className={`card ${tipo}`}>
      <div className="card-favorite">
        <PenguinButton
          color="btn-favorite"
          text={<i class="fa-solid fa-heart"></i>}
          // text={`${favoritePenguin === false ? '<i class="fa-regular fa-heart"></i>' : '<i class="fa-solid fa-heart"></i>'}`}
          onClick={() => {
            console.log("favorito");
          }}
        />
      </div>
      <img src={urlImagen} />
      <h2>{nombre}</h2>
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