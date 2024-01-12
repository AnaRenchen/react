import ItemCount from "./ItemCount";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{name} </h6>
        <p className="card-text"> Stock available: {stock}</p>
        <p className="card-text"> {price} </p>
        <ItemCount
          initial={1}
          stock={5}
          onAdd={(cantidad) => console.log("Cantidad Agregada:", cantidad)}
        />
      </div>
    </div>
  );
};

export default Item;
