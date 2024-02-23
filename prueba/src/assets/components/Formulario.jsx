import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Formulario = () => {
  const { cart, clearCart, calcularTotal } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: "Thank you for your purchase!",
        text: `Your order ID is: ${orderId}`,
        color: "#333333",
        background: "white",
        imageUrl: "https://i.postimg.cc/hPz88dS6/foot.png",
        confirmButtonColor: "#2a305c",
      });
    }
  }, [orderId]);

  const generateOrder = () => {
    if (name.length === 0) {
      return false;
    }

    if (email.length === 0) {
      return false;
    }

    if (telephone.length === 0) {
      return false;
    }

    const buyer = { name: name, email: email, phone: telephone };
    const products = cart.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
    const fecha = new Date();
    const date = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}, ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = calcularTotal();
    const order = {
      buyer: buyer,
      products: products,
      date: date,
      total: total,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((resultado) => {
      clearCart();
      setOrderId(resultado.id);
    });
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label subtotal">Name and Surname:</label>
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid black" }}
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label subtotal">Email:</label>
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid black" }}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label subtotal">Telephone number:</label>
        <input
          type="text"
          className="form-control"
          style={{ border: "1px solid black" }}
          onInput={(e) => {
            setTelephone(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn_goCart float-end"
        style={{ width: 150 }}
        onClick={generateOrder}
      >
        Submit Order
      </button>
    </form>
  );
};

export default Formulario;
