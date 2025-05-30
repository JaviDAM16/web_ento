import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { LanguageSelector } from "../utils/components/LanguageSelector";
import { useLanguage } from "../utils/contexts/Language";
import imagenes from "../images";

export const Navbar = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/inicio" onClick={closeMenu}>
          <img src={imagenes.logozoro} alt="Zoro Shop Logo" />
        </Link>
      </div>

      {/* Botón hamburguesa visible solo en móvil */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/inicio" onClick={closeMenu}>
              {t("start")}
            </Link>
          </li>
          <li>
            <Link to="/cataleg" onClick={closeMenu}>
              {t("catalog")}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to="/carrito" onClick={closeMenu}>
              {t("cart")}
            </Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};
