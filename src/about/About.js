import "./About.css";
import javiImage from "./javi.jpg";

export const About = () => {
  return (
    <div className="profile-container">
      <div className="text-container">
        <h1>Javier Sanchez Ramos</h1>
        <pre>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </pre>
      </div>
      <img src={javiImage} alt="Imagen personal" className="profile-image" />
    </div>
  );
};
