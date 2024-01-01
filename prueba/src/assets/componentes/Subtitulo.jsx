const Subtitulo = ({ contenido, color }) => {
  return (
    <h2 className="subtitulo_seccion" style={{ color: color }}>
      {contenido}
    </h2>
  );
};

export default Subtitulo;
