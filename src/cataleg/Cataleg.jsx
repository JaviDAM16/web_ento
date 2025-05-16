import "./Cataleg.css";
import { Link } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";

export const Cataleg = () => {
  return (
    <div className="catalogo-container">
      {prendas.data.map((producte) => (
        <Link
          to={`/producte/${producte.id}`}
          key={producte.id}
          className="catalogo-item"
        >
          <div className="imagen-wrapper">
            <img
              src={imagenes[producte.imagen]}
              alt={producte.nombre}
              className="catalogo-img"
            />
          </div>
          <div className="catalogo-info">
            <h3>{producte.nombre}</h3>
            <p>${producte.precio.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
