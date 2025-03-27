import PenguinCard from "./../components/PenguinCard/PenguinCard";
import { useState, useEffect } from "react";
import "./page.css";

const FavoritePage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? {};
    setFavoriteCards(favorites);
  }, []);
  
  return (
      <div className="container-favorite">
      {  
          Object.keys(favoriteCards).length > 0 ?  (
            Object.keys(favoriteCards).map((id) => (
                <PenguinCard urlImagen={favoriteCards[id]} id={id} breed={"raza"} description={"descrip"}  />
            ))
                ) : (
            <p>No tienes pingüinos favoritos.</p>
            )}
    </div>
  );
};

export default FavoritePage;