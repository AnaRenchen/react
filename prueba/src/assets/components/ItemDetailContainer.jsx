import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
