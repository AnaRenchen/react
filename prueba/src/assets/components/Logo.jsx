import { Link } from "react-router-dom";

const Logo = ({ size }) => {
  return (
    <Link to={"/"}>
      <img
        className="image-fluid logo"
        width={size}
        src="https://i.postimg.cc/xdxyyyzr/logo-antiguo.jpg"
        alt="logo NavBar"
      />
    </Link>
  );
};

export default Logo;
