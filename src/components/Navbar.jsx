import { Link } from "react-router-dom";
import "./Navbar.scss";
import { LanguageSelector } from "../utils/components/LanguageSelector";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/cataleg">Cataleg</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};
