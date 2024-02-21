import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Formulario from "./Formulario";

const Checkout = () => {
  const { cart, calcularTotal } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="checkout_title">Checkout</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Formulario />
        </div>
        <div className="col-md-6 text-center">
          <table className="table">
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="align-middle">
                    <img src={product.img} alt={product.name} width={80} />
                  </td>
                  <td className="text-start align-middle subtotal">
                    {product.name}
                  </td>
                  <td className="text-start align-middle subtotal">
                    ${product.price}
                  </td>
                  <td className="text-start align-middle subtotal">
                    {product.cantidad}
                  </td>
                  <td className="text-start align-middle subtotal">
                    ${product.cantidad * product.price}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center align-middle" colSpan={4}>
                  &nbsp;
                </td>
                <td className="text-start align-middle subtotal">
                  ${calcularTotal()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
