import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="card_detail">
      <h6 className="card_title_container">{name} </h6>
      <img src={img} className="imagen_detail" width={300} alt={name} />
      <div className="card_body_detail">
        <p> Category: {category}</p>
        <p> Description: {description}</p>
        <p> ${price} </p>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(cantidad) => console.log("Cantidad Agregada:", cantidad)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
