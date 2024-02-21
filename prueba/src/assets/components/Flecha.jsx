import { Link } from "react-router-dom";
import FlechaLogo from "../imagenes/up.png";

const Flecha = () => {
  const haciaArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flecha">
      <Link to={"/"} onClick={haciaArriba}>
        <img className="logo_flecha" src={FlechaLogo} alt="logoFlecha" />
      </Link>
    </div>
  );
};

export default Flecha;
