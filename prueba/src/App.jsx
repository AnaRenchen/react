import "./App.css";
import Carousel from "../src/assets/components/Carousel";
import Header from "../src/assets/components/Header";
import SeccionProductos from "../src/assets/components/SeccionProductos";
import Footer from "../src/assets/components/Footer";
import SeccionProfile from "../src/assets/components/SeccionProfile";
import SeccionContacto from "../src/assets/components/SeccionContacto";

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
