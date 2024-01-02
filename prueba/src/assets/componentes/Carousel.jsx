import Titulo from "./Titulo";
import KintaroKoi from "../imagenes/kintaro_koi.jpg";
import Fenix from "../imagenes/fenix.jpg";
import Orochimaru from "../imagenes/orochimaru.jpg";
import MascaraPelos from "../imagenes/mascara_pelos.jpg";
import Sunade from "../imagenes/sunade.jpg";

const Carousel = () => {
  return (
    <div className="contenedor_imagen">
      <Titulo />
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide col-lg-6 col-md-12 col-sm-12"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={KintaroKoi} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Orochimaru} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Fenix} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Sunade} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={MascaraPelos} class="d-block w-100" alt="..." />
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
