import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <div className="header">
      <CartWidget />
      <NavBar />
    </div>
  );
};

export default Header;
