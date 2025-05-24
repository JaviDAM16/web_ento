import "./Inicio.css";
import { Link } from "react-router-dom";
import prendas from "../data/prendas.json";
import imagenes from "../images";
import { Carrusel } from "../components/Carrusel";
import { useLanguage } from "../utils/contexts/Language";
import { Parallax } from "./parallax";
import { useEffect, useState } from "react";


export const Inicio = () => {
  const { t } = useLanguage();
  const productosDestacados = prendas.data.slice(0, 3); // Solo los primeros 3
   const [showContent, setShowContent] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000); // Espera 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="inicio-container">
      <title>Zoro Shop</title>

      {/* LOGO animado */}
      <div className={`logo-inicio ${showContent ? "fade-out" : "fade-in"}`}>
         <img src={imagenes.logozoro} alt="Zoro Shop Logo" className="logo-img" />
      </div>

      {/* CONTENIDO PRINCIPAL con aparición suave */}
      <div className={`contenido-inicio ${showContent ? "visible" : ""}`}>
        <h1 className="inicio-titulo">{t("main-title")}</h1>

      <Carrusel />

      <section className="destacados">
        <h2>{t("featured-products")}</h2>
        <div className="productos-grid">
          {productosDestacados.map((prenda) => (
            <div className="producto-card" key={prenda.id}>
              <img src={imagenes[prenda.imagen]} alt={prenda.nombre} />
              <div class="name">
                <h3>{prenda.nombre}</h3>
                <p>
                  {prenda.precio.toFixed(2)} {t("divisa")}
                </p>
                <Link to={`/producte/${prenda.id}`}>{t("see-more")}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Parallax text1={"new-collection"} text2={"free-shipping"}>
        <section className="contenido-info">
          <h2>{t("about-us")}</h2>
          <p>{t("about-us-desc")}</p>
          <Link className="cta-button" to="/cataleg">
            {t("explore-collection")}
          </Link>
        </section>
      </Parallax>
    </div>
    </div>
  );
};
