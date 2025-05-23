import "./Producte.css";
import { useParams } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";
import { useLanguage } from "../utils/contexts/Language";

export const Producte = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const producte = prendas.data.find((p) => p.id === Number(id));

  if (!producte) {
    return <div>{t("not-found")}.</div>;
  }

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={imagenes[producte.imagen]} alt={producte.nombre} />
      </div>
      <div className="info-container">
        <h2>{producte.nombre}</h2>
        <p>
          <strong>{t("description")}:</strong> {producte.descripcion}
        </p>
        <p>
          <strong>{t("price")}:</strong> ${producte.precio.toFixed(2)}
        </p>
        <p>
          <strong>{t("size")}:</strong> {producte.talla}
        </p>
        <p>
          <strong>{t("color")}:</strong> {producte.color}
        </p>
        {/* Opcional: botón para ver más */}
      </div>
    </div>
  );
};
