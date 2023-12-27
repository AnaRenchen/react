import LogoHeader from "../imagenes/logo_antiguo.jpeg";

const Logo = ({ size }) => {
  return (
    <img
      className="image-fluid logo"
      width={size}
      src={LogoHeader}
      alt="logo NavBar"
    />
  );
};

export default Logo;
