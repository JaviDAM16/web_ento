import "./Producte.css";
import { useParams } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";
import { useLanguage } from "../utils/contexts/Language";
import { useCarrito } from "../carrito/CarritoContext";

export const Producte = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const producte = prendas.data.find((p) => p.id === Number(id));

  // Acceder a las funciones del carrito
  const { agregarProducto } = useCarrito();

  // Función para manejar el clic en el botón "Comprar ahora"
  const handleBuyNow = () => {
    const productoConCantidad = {
      ...producte,
      cantidad: 1, // Establecer una cantidad inicial
    };

    window.dispatchEvent(
      new CustomEvent("show-notification", {
        detail: {
          message: `Tu producto ${producte.nombre} ha sido agregado al carrito.`,
        },
      })
    );

    agregarProducto(productoConCantidad); // Llamar a la función para agregar el producto al carrito
  };

  if (!producte) {
    return <div>{t("not-found")}</div>;
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
        <button className="buy-button" onClick={handleBuyNow}>
          {t("buy-now")}
        </button>
      </div>
    </div>
  );
};
