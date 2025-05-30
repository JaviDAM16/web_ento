// CarritoContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getProducts, saveProducts } from "../utils/localStorage";
const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState(getProducts());

  useEffect(() => {
    saveProducts(productos);
  }, [productos]);

  // Añadir producto al carrito
  const agregarProducto = (producto) => {
    setProductos((prevProductos) => {
      // Comprobar si el producto ya está en el carrito
      const productoExistente = prevProductos.find((p) => p.id === producto.id);

      if (productoExistente) {
        // Si ya existe, aumentar la cantidad
        return prevProductos.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        // Si no existe, agregar el producto al carrito con la cantidad inicial
        return [
          ...prevProductos,
          { ...producto, cantidad: producto.cantidad || 1 },
        ];
      }
    });
  };

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    setProductos(productos.filter((producto) => producto.id !== id));

    window.dispatchEvent(
      new CustomEvent("show-notification", {
        detail: {
          message: `Tu producto ${producto.nombre} se ha eliminado del carrito.`,
        },
      })
    );
  };

  // Actualizar cantidad del producto en el carrito
  const actualizarCantidad = (id, cantidad) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id ? { ...producto, cantidad } : producto
      )
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        productos,
        agregarProducto,
        eliminarProducto,
        actualizarCantidad,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
