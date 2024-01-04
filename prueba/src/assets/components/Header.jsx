import NavBar from "../components/NavBar";
import CartWidget from "../components/CartWidget";

const Header = () => {
  return (
    <div className="header">
      <CartWidget />
      <NavBar />
    </div>
  );
};

export default Header;
