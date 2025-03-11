import React from 'react';
import './PenguinButton.css';

const PenguinButton = ({ text, onClick = () => { }, color = "primary" }) => {
  return (
    <button className={`btn button-${color}`} onClick={onClick}>{text}</button>
  )
};

export default PenguinButton;