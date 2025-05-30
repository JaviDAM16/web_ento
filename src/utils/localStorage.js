export const getProducts = () => {
  const productos = localStorage.getItem("productos");
  return productos ? JSON.parse(productos) : []; // Devuelve un arreglo vacío si no hay productos
};

// Función para guardar los productos en localStorage
export const saveProducts = (productos) => {
  localStorage.setItem("productos", JSON.stringify(productos));
};
