import { Link } from "react-router-dom";

const Flecha = () => {
  const haciaArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flecha">
      <Link to={"/"} onClick={haciaArriba}>
        <img
          className="logo_flecha"
          src="https://i.postimg.cc/mZNkvZmk/up.png"
          alt="logoFlecha"
        />
      </Link>
    </div>
  );
};

export default Flecha;
