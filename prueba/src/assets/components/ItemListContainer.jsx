import { useState, useEffect } from "react";
import arrayProductos from "../components/json/productos.json";
import Subtitulo from "./Subtitulo";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Flecha from "./Flecha";

const ItemListContainer = () => {
  const colorSubtitulo = "#333333";

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayProductos.filter((product) => product.category === id)
            : arrayProductos
        );
      }, 2000);
    });
    promesa.then((data) => {
      setProducts(data);
    });
  }, [id]);

  return (
    <div>
      {id ? "" : <Carousel />}
      <Subtitulo
        contenido={"Shop for Original Paintings"}
        color={colorSubtitulo}
      />
      <ItemList products={products} />
      {id ? "" : <Flecha />}
    </div>
  );
};

export default ItemListContainer;
