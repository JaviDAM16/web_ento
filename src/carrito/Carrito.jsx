// Carrito.jsx
import React from "react";
import { useCarrito } from "./CarritoContext";
import "./Carrito.css";
import prendas from "../data/prendas.json";
import imagenes from "../images";

export const Carrito = () => {
  const { productos, eliminarProducto, actualizarCantidad } = useCarrito();

  const total = productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const handleCantidadChange = (id, cantidad) => {
    if (cantidad > 0) {
      actualizarCantidad(id, cantidad);
    }
  };

  return (
    <div className="carrito-container">
      <h1>Tu Carrito</h1>

      {productos.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div className="productos-lista">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <img
                src={imagenes[producto.imagen]}
                alt={producto.nombre}
                className="producto-img"
              />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>${producto.precio.toFixed(2)}</p>
                <div className="cantidad">
                  <button
                    onClick={() =>
                      handleCantidadChange(producto.id, producto.cantidad - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={producto.cantidad}
                    onChange={(e) =>
                      handleCantidadChange(
                        producto.id,
                        parseInt(e.target.value)
                      )
                    }
                    min="1"
                  />
                  <button
                    onClick={() =>
                      handleCantidadChange(producto.id, producto.cantidad + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button onClick={() => eliminarProducto(producto.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {productos.length > 0 && (
        <div className="resumen">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="proceder-compra">Proceder al pago</button>
        </div>
      )}
    </div>
  );
};
