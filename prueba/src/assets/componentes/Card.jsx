import Orochimaru from "../imagenes/orochimaru.jpg";
import KintaroKoi from "../imagenes/kintaro_koi.jpg";
import Fenix from "../imagenes/fenix.jpg";

const Card = () => {
  return (
    <div className="contenedor_card">
      <div className="card">
        <img src={Orochimaru} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Orochimaru 大蛇丸 </h5>
          <p className="card-text"> A3 Size</p>
          <p className="card-text"> $300</p>
          <a href="#" className="btn">
            Shop
          </a>
        </div>
      </div>
      <div className="card">
        <img src={KintaroKoi} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Kintaro to Koi 金太郎と鯉</h5>
          <p className="card-text"> A3 Size</p>
          <p className="card-text">$450</p>
          <a href="#" className="btn">
            Shop
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Fenix} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hou-oo 鳳凰</h5>
          <p className="card-text">A3 Size</p>
          <p className="card-text">$350</p>
          <a href="#" className="btn">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
