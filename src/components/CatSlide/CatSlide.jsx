import React from "react";
import "./CatSlide.css";
import { useState, useEffect } from "react";
import { getCats } from "../../service/catService";
import CatCard from "../CatCard/CatCard.jsx";
import CatButton from "../CatButton/CatButton.jsx";

const CatSlide = () => {
  const [dataCat, setDataCat] = useState([]);
  const [indexImage, setIndexImage] = useState(0);
  const [catDisplayed, setCatDisplayed] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataCat = await getCats();
      setDataCat(dataCat);
      setCatDisplayed(dataCat.slice(indexImage, indexImage + 3));
      setIndexImage(indexImage + 3);
    };

    if (indexImage > 0) {
      return;
    }
    loadData();
  }, []);

  const nextImages = () => {
    setCatDisplayed(dataCat.slice(indexImage, indexImage + 3));
    setIndexImage(indexImage + 3);
  };

  const previousImages = () => {
    setCatDisplayed(dataCat.slice(indexImage - 6, indexImage - 3));
    setIndexImage(indexImage - 3);
  };

  return (
    <div className="container-buttons">
      {indexImage > 3 ? (
        <CatButton
          text={<i class="fa-solid fa-caret-left"></i>}
          onClick={previousImages}
          color="button-arrows btn"
        />
      ) : (
        <div className="fill-button">
          <i class="fa-solid fa-caret-left"></i>
        </div>
      )}
      <div className="container-carrusel">
        {catDisplayed.map((cat) => (
          <>
            <CatCard
              key={cat.id}
              urlImagen={cat.url}
              id={cat.id}
              breed={
                cat.breeds[0] === undefined
                  ? "Desconocida"
                  : cat.breeds[0].name
              }
              description={
                cat.breeds[0]=== undefined
                  ? "Sin descripción"
                  : cat.breeds[0].description
              }
            />
          </>
        ))}
      </div>
      {indexImage < dataCat.length ? (
        <CatButton
          text={<i class="fa-solid fa-caret-right"></i>}
          onClick={nextImages}
          color="button-arrows btn"
        />
      ) : (
        <div className="fill-button">
          <i class="fa-solid fa-caret-right"></i>
        </div>
      )}
    </div>
  );
};

export default CatSlide;
