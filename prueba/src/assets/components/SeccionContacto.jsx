import Subtitulo from "./Subtitulo";

const SeccionContacto = () => {
  return (
    <div className="contact">
      <div className="contact_info">
        <Subtitulo
          contenido={"Contact Information"}
          condicion={false}
          condicion2={false}
        />
        <p className="text_contact">
          If you have any questions or wish to get a tattoo, send us an email:
          santu.vegan@hotmail.com
        </p>
      </div>
      <div className="logos">
        <a href="https://www.instagram.com/santuhorisada/" target="_blank">
          <img
            className="logo_insta"
            src="https://i.postimg.cc/Zq4Dm7qt/icons8-instagram-100.png"
            alt="logoInsta"
          />
        </a>
        <a href="https://maps.app.goo.gl/AhYJxdLQMR4zB7vF9" target="_blank">
          <img
            className="logo_dire"
            src="https://i.postimg.cc/qRwwYVYF/dire-grande.png"
            alt="logoDire"
          />
        </a>
      </div>
    </div>
  );
};
export default SeccionContacto;
