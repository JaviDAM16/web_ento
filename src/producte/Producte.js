import "./Producte.css";
import { useParams } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";

export const Producte = () => {
  const { id } = useParams();
  const producte = prendas.data.find((p) => p.id === Number(id));

  if (!producte) {
    return <div>Producte no trobat.</div>;
  }

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={imagenes[producte.imagen]} alt={producte.nombre} />
      </div>
      <div className="info-container">
        <h2>{producte.nombre}</h2>
        <p>
          <strong>Descripción:</strong> {producte.descripcion}
        </p>
        <p>
          <strong>Precio:</strong> ${producte.precio.toFixed(2)}
        </p>
        <p>
          <strong>Talla:</strong> {producte.talla}
        </p>
        <p>
          <strong>Color:</strong> {producte.color}
        </p>
        {/* Opcional: botón para ver más */}
      </div>
    </div>
  );
};
