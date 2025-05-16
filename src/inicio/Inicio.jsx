import "./Inicio.css";
import { Link } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";
import { Carrusel } from "../components/Carrusel";

export const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>ZORO SHOP</h1>
      <Carrusel />
      {/* Aquí puedes añadir más secciones, como productos destacados, banners, etc. */}
    </div>
  );
};
