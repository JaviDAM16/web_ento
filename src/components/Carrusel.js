import React, { useState, useEffect } from "react";
import prendas from "../data/prendas.json";
import "./Carrusel.css";

const getImage = (imageName) => {
  try {
    return require(`../images/${imageName}.jpg`); // usa .png si las tienes en ese formato
  } catch (error) {
    console.warn(`No se pudo cargar la imagen: ${imageName}`);
    return null;
  }
};

export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === prendas.data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Carga la imagen dinámica con require

  const currentProduct = prendas.data[currentIndex];
  const imageSrc = getImage(currentProduct.imagen);

  return (
    <div className="carrusel">
      <div className="carrusel-slide active">
        {imageSrc && <img src={imageSrc} alt={currentProduct.nombre} />}
      </div>
      <button
        className="carrusel-button prev"
        onClick={() =>
          setCurrentIndex(
            (currentIndex - 1 + prendas.data.length) % prendas.data.length
          )
        }
      >
        ‹
      </button>
      <button
        className="carrusel-button next"
        onClick={() =>
          setCurrentIndex((currentIndex + 1) % prendas.data.length)
        }
      >
        ›
      </button>
    </div>
  );
};
