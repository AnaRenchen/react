import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ borderRadius: "0" }}
      />
      <div className="card-body">
        <h6 className="card-title">{product.name} </h6>
        <p className="card-text"> Stock available: {product.stock}</p>
        <p className="card-text"> ${product.price} </p>
        <Link to={"/item/" + product.id}>
          <button className="btn btn_shop">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
