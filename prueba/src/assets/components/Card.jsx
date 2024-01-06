import { useState } from "react";

const Card = ({ name, image, price, disponibilidad }) => {
  const [comprar, setComprar] = useState(disponibilidad);

  function realizarCompra() {
    setComprar(comprar == "1 available" ? "SOLD OUT" : "1 available");
  }
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text"> A3 Size</p>
        <p className="card-text"> {comprar}</p>
        <p className="card-text"> {price} </p>
        <a href="#" className="btn" onClick={realizarCompra}>
          Shop
        </a>
      </div>
    </div>
  );
};

export default Card;
