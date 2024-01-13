import Item from "./Item";

const ItemLista = ({ products }) => {
  return (
    <div className="contenedor_card">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemLista;
