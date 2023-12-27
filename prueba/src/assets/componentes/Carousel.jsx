import Titulo from "./Titulo";
import KintaroKoi from "../imagenes/kintaro_koi.jpg";
import Fenix from "../imagenes/fenix.jpg";
import Orochimaru from "../imagenes/orochimaru.jpg";

const Carousel = () => {
  return (
    <div className="contenedor_imagen">
      <Titulo />
      <div>
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide col-lg-6 col-md-12 col-sm-12"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={KintaroKoi} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Orochimaru} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Fenix} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
