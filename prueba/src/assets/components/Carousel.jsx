import Titulo from "../components/Titulo";
import Greeting from "./Greeting";

const Carousel = () => {
  return (
    <div className="contenedor_imagen">
      <Titulo shopName={"Horisada 彫定"} />
      <Greeting
        greetingJapan={"いらっしゃいませ!"}
        greetingEnglish={"Welcome!"}
      />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide col-lg-6 col-md-12 col-sm-12"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.postimg.cc/5ttXTJYJ/kintaro-koi.jpg"
              className="d-block w-100"
              alt="Kintaro y Koi"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/y81x3KTR/orochimaru.jpg"
              className="d-block w-100"
              alt="Orochimaru"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/J4bHBPVf/fenix.jpg"
              className="d-block w-100"
              alt="Fenix"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/dV518fWx/sunade.jpg"
              className="d-block w-100"
              alt="Tsunade"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/YqfjS0Qk/mascara-pelos.jpg"
              className="d-block w-100"
              alt="Casco y Hime"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
