import React, { useState, useEffect } from "react";
import "./CatSlide.css";
import { getCats } from "../../service/catService";
import CatCard from "../CatCard/CatCard.jsx";
import CatButton from "../CatButton/CatButton.jsx";

const CatSlide = () => {
  const [dataCat, setDataCat] = useState([]);
  const [indexImage, setIndexImage] = useState(0);
  const [catDisplayed, setCatDisplayed] = useState([]);
  const [numCards, setNumCards] = useState(window.innerWidth < 768 ? 1 : 3);

  useEffect(() => {
    const loadData = async () => {
      const data = await getCats();
      setDataCat(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setNumCards(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCatDisplayed(dataCat.slice(indexImage, indexImage + numCards));
  }, [dataCat, indexImage, numCards]);

  const nextImages = () => {
    setIndexImage((prev) => prev + numCards);
  };

  const previousImages = () => {
    if (indexImage - numCards < 0) return;
    setIndexImage((prev) => prev - numCards);
  };

  return (
    <div className="container-buttons">
      {indexImage > 0 ? (
        <CatButton
          text={<i className="fa-solid fa-caret-left"></i>}
          onClick={previousImages}
          color="button-arrows btn"
        />
      ) : (
        <div className="fill-button">
          <i className="fa-solid fa-caret-left"></i>
        </div>
      )}
      <div className="container-carrusel">
        {catDisplayed.map((cat) => (
          <CatCard
            key={cat.id}
            urlImagen={cat.url}
            id={cat.id}
            breed={cat.breeds[0]?.name || "Desconocida"}
            description={cat.breeds[0]?.description || "Sin descripción"}
          />
        ))}
      </div>
      {indexImage + numCards < dataCat.length ? (
        <CatButton
          text={<i className="fa-solid fa-caret-right"></i>}
          onClick={nextImages}
          color="button-arrows btn"
        />
      ) : (
        <div className="fill-button">
          <i className="fa-solid fa-caret-right"></i>
        </div>
      )}
    </div>
  );
};

export default CatSlide;
