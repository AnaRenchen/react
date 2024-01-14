import "./App.css";
import Carousel from "../src/assets/components/Carousel";
import Header from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import SeccionProfile from "../src/assets/components/SeccionProfile";
import SeccionContacto from "../src/assets/components/SeccionContacto";
import ItemListContainer from "./assets/components/ItemListContainer";
import Flecha from "./assets/components/Flecha";
import ItemDetailContainer from "./assets/components/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <ItemListContainer />
      <ItemDetailContainer />
      <SeccionProfile />
      <SeccionContacto />
      <Flecha />
      <Footer />
    </>
  );
}

export default App;
