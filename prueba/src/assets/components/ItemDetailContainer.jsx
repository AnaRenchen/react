import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("10")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
