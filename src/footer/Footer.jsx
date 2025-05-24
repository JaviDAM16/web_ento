import "./Footer.scss";
import { useLanguage } from "../utils/contexts/Language";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/inicio">{t("start")}</Link>
          <Link to="/cataleg">{t("catalog")}</Link>
          <Link to="/about">{t("about")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Zoro Shop. {t("all-rights-reserved")}</p>
        </div>
      </div>
    </footer>
  );
};
