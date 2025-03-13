import React from 'react'
import {useState, useEffect} from 'react';
import {getPenguins} from '../../service/penguinService';

const PenguinSlide = () => {
  const [dataPenguin, setDataPenguin] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataPenguin = await getPenguins();
      setDataPenguin(dataPenguin);
    };
    loadData();
  }, []);

  return(
    <div>
      {dataPenguin.map((penguin) => (
        <p>{penguin.url}</p>
      ))}
    </div>
  );
};

export default PenguinSlide;