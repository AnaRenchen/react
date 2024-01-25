import LogoHeader from "../imagenes/logo_antiguo.jpeg";
import { Link } from "react-router-dom";

const Logo = ({ size }) => {
  return (
    <Link to={"/"}>
      <img
        className="image-fluid logo"
        width={size}
        src={LogoHeader}
        alt="logo NavBar"
      />
    </Link>
  );
};

export default Logo;
