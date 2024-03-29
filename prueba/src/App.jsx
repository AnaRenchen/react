import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import SeccionProfile from "./assets/components/SeccionProfile";
import SeccionContacto from "./assets/components/SeccionContacto";
import ItemListContainer from "./assets/components/ItemListContainer";
import ItemDetailContainer from "./assets/components/ItemDetailContainer";
import Cart from "./assets/components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./assets/components/Error404";
import CartContextProvider from "./assets/context/CartContext";
import Checkout from "./assets/components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/profile"} element={<SeccionProfile />} />
          <Route path={"/contact"} element={<SeccionContacto />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
