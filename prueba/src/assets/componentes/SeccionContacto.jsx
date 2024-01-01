import Instagram from "../imagenes/instagram_logo.png";
import LogoDireccion from "../imagenes/dire_grande.png";
import Subtitulo from "./Subtitulo";
const SeccionContacto = () => {
  const colorSubtitulo = "#333333";
  return (
    <div className="contact">
      <div className="contact_info">
        <Subtitulo contenido="Contact Information" color={colorSubtitulo} />
        <p className="text_contact">
          If you have any questions or wish to get a tattoo, send us an email:
          santu.vegan@hotmail.com
        </p>
      </div>
      <div className="logos">
        <a href="https://www.instagram.com/santuhorisada/" target="_blank">
          <img className="logo_insta" src={Instagram} alt="logoInsta" />
        </a>
        <a href="https://maps.app.goo.gl/AhYJxdLQMR4zB7vF9" target="_blank">
          <img className="logo_dire" src={LogoDireccion} alt="logoDire" />
        </a>
      </div>
    </div>
  );
};
export default SeccionContacto;
