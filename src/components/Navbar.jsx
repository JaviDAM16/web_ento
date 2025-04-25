import { Link } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de importar el archivo CSS

export const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
