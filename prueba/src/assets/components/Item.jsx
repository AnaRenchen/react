const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h6 className="card-title">{name} </h6>
        <p className="card-text"> Stock available: {stock}</p>
        <p className="card-text"> ${price} </p>
        <button className="btn btn_shop">See more</button>
      </div>
    </div>
  );
};

export default Item;