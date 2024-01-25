import Header from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import SeccionProfile from "../src/assets/components/SeccionProfile";
import SeccionContacto from "../src/assets/components/SeccionContacto";
import ItemListContainer from "./assets/components/ItemListContainer";
import ItemDetailContainer from "./assets/components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./assets/components/Error404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/profile"} element={<SeccionProfile />} />
        <Route path={"/contact"} element={<SeccionContacto />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
