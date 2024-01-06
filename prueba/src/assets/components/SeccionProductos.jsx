import Card from "../components/Card";
import Subtitulo from "../components/Subtitulo";
import Orochimaru from "../imagenes/orochimaru.jpg";
import KintaroKoi from "../imagenes/kintaro_koi.jpg";
import Fenix from "../imagenes/fenix.jpg";

const SeccionProductos = () => {
  const colorSubtitulo = "#333333";
  return (
    <div>
      <Subtitulo
        contenido={"Shop for Original Paintings"}
        color={colorSubtitulo}
        id="shop"
      />
      <div className="contenedor_card">
        <Card
          name={"Orochimaru 大蛇丸"}
          image={Orochimaru}
          price={"$300"}
          disponibilidad={"1 available"}
        />
        <Card
          name={"Kintaro to Koi 金太郎と鯉"}
          image={KintaroKoi}
          price={"$450"}
          disponibilidad={"1 available"}
        />
        <Card
          name={"Hou-oo 鳳凰"}
          image={Fenix}
          price={"$350"}
          disponibilidad={"1 available"}
        />
      </div>
    </div>
  );
};

export default SeccionProductos;
