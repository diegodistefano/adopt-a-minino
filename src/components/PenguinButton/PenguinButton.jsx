import React from 'react';
import './PenguinButton.css';

const PenguinButton = ({ text, onClick = () => { }, color = "button-primary btn" }) => {
  return (
    <button className={`${color}`} onClick={onClick}>{text}</button>
  )
};

export default PenguinButton;