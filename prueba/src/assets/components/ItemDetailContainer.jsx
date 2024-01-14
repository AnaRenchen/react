import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.error(error, "Product not found"));
  }, []);

  return (
    <div class="detail_container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
