import ItemCount from "./ItemCount";

const Card = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text"> A3 Size</p>
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

export default Card;
