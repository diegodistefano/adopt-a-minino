import PenguinCard from "./../components/PenguinCard/PenguinCard";
import { useState, useEffect } from "react";
import "./page.css";

const FavoritePage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? {};
    setFavoriteCards(favorites);
  }, [favoriteCards[id]]);

  return (
    <div className="container-favorite">
      {
        Object.keys(favoriteCards).length > 0 ? (
          Object.keys(favoriteCards).map((id) => (
            <PenguinCard key={favoriteCards[id]} urlImagen={favoriteCards[id].urlImagen} id={id} breed={favoriteCards[id].breed} description={favoriteCards[id].description} />
          ))
        ) : (
          <p>No tienes mininos favoritos.</p>
        )}
    </div>
  );
};

export default FavoritePage;