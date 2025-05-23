import "./About.css";
import javi from "./javi.jpg";
import tienda from "./tienda.jpg"; // Cambia por tu ruta real
import { useLanguage } from "../utils/contexts/Language";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about-container">
      <div className="about-top">
        <img src={tienda} alt="Nuestra tienda" className="about-store-img" />

        <div className="about-text">
          <h2>{t("about-us")}</h2>
          <p>{t("about-us-page")}</p>
        </div>
      </div>

      <div className="about-ceo">
        <img src={javi} alt="Foto del CEO" className="ceo-photo" />
        <p className="ceo-name">Javier Sanchez Ramos</p>
        <p className="ceo-title">CEO</p>
      </div>
    </section>
  );
};
