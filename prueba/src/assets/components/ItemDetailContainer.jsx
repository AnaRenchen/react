import { useState, useEffect } from "react";
/*import arrayProductos from "./json/productos.json";*/
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  /*useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        let item = arrayProductos.find(
          (product) => product.id === parseInt(id)
        );
        resolve(item);
      }, 2000);
    });
    promesa.then((data) => {
      setLoading(false);
      setProduct(data);
      console.log(data);
    });
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
    const product = doc(db, "products", id);
    getDoc(product).then((resultado) => {
      setLoading(false);
      setProduct({ id: resultado.id, ...resultado.data() });
    });
  }, [id]);

  return loading ? <Loading /> : <ItemDetail {...product} />;
};

export default ItemDetailContainer;
