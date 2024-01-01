import Card from "./Card";
import Subtitulo from "./Subtitulo";

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
