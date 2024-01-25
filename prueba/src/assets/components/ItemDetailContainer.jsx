import { useState, useEffect } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        let item = arrayProductos.find(
          (product) => product.id === parseInt(id)
        );
        resolve(item);
      }, 2000);
    });
    promesa.then((data) => {
      setProduct(data);
      console.log(data);
    });
  }, [id]);

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
