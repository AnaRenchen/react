import Card from "../components/Card";
import Subtitulo from "../components/Subtitulo";

const SeccionProductos = () => {
  const colorSubtitulo = "#333333";
  return (
    <div>
      <Subtitulo
        contenido="Shop for Original Paintings"
        color={colorSubtitulo}
      />
      <Card />
    </div>
  );
};

export default SeccionProductos;
