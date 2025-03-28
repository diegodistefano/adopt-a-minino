import React from 'react';
import './CatButton.css';

const CatButton = ({ text, onClick = () => { }, color = "button-primary btn" }) => {
  return (
    <button className={`${color}`} onClick={onClick}>{text}</button>
  )
};

export default CatButton;