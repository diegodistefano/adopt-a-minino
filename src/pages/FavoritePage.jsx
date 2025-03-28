import CatCard from "./../components/CatCard/CatCard";
import { useState, useEffect } from "react";
import "./page.css";

const FavoritePage = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? {};
    setFavoriteCards(favorites);
  }, []);
  
  const removeFav=(fav)=>{
    setFavoriteCards(fav);
  }

  return (
    <div className="container-favorite">
      {
        Object.keys(favoriteCards).length > 0 ? (
          Object.keys(favoriteCards).map((id) => (
            <CatCard key={favoriteCards[id]} urlImagen={favoriteCards[id].urlImagen} id={id} breed={favoriteCards[id].breed} description={favoriteCards[id].description} fnc={removeFav}/>
          ))
        ) : (
          <h4>No tienes mininos favoritos.</h4>
        )}
    </div>
  );
};

export default FavoritePage;