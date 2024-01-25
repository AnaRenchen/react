import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="contenedor_card">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
