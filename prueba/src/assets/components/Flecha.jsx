import FlechaLogo from "../imagenes/up.png";

const Flecha = () => {
  return (
    <div className="flecha">
      <a href="#titulo">
        <img className="logo_flecha" src={FlechaLogo} alt="logoFlecha" />
      </a>
    </div>
  );
};

export default Flecha;
