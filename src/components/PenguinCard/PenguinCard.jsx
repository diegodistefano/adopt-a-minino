import React from "react";
import "./PenguinCard.css";
import PenguinButton from "../PenguinButton/PenguinButton";

const PenguinCard = ({ urlImagen, nombre, tipo }) => {

  return (
    <div className={`card ${tipo}`}>
      <img src={urlImagen} />
      <h2>{nombre}</h2>
      <PenguinButton text="Adoptame" onClick={() => { console.log("hola"); }} />
    </div>
  );
};

export default PenguinCard;