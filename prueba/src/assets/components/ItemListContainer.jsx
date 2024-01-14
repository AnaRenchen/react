import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import Subtitulo from "./Subtitulo";
import ItemLista from "./ItemLista";

const ItemListContainer = () => {
  const colorSubtitulo = "#333333";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <Subtitulo
        contenido={"Shop for Original Paintings"}
        color={colorSubtitulo}
        id="shop"
      />
      <ItemLista products={products} />
    </div>
  );
};

export default ItemListContainer;
