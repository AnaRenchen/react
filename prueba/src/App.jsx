import "./App.css";
import Carousel from "./assets/componentes/Carousel";
import Header from "./assets/componentes/Header";
import SeccionProductos from "./assets/componentes/SeccionProductos";
import Footer from "./assets/componentes/Footer";
import SeccionContacto from "./assets/componentes/SeccionContacto";
import SeccionProfile from "./assets/componentes/SeccionProfile";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <SeccionProductos />
      <SeccionProfile />
      <SeccionContacto />
      <Footer />
    </>
  );
}

export default App;
