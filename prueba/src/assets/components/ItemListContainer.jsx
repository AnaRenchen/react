import { useState, useEffect } from "react";
/*import arrayProductos from "../components/json/productos.json";*/
import Subtitulo from "./Subtitulo";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Flecha from "./Flecha";
import Loading from "./Loading";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  /* useEffect(() => {
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
      setLoading(false);
      setProducts(data);
    });
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    const q = id
      ? query(productsCollection, where("category", "==", id))
      : productsCollection;
    getDocs(q).then((resultado) => {
      setLoading(false);
      setProducts(
        resultado.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }))
      );
    });
  }, [id]);

  return (
    <div>
      {id ? "" : <Carousel />}
      <Subtitulo
        contenido={"Shop for Original Paintings"}
        condicion={false}
        condicion2={false}
      />
      {loading ? <Loading /> : <ItemList products={products} />}
      {id ? "" : <Flecha />}
    </div>
  );
};

export default ItemListContainer;
