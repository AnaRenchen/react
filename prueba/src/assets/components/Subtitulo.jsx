const Subtitulo = ({ contenido, condicion, condicion2 }) => {
  const border = condicion
    ? {
        borderBottom: "1px solid white",
        width: "42%",
        textAlign: "left",
        paddingBottom: "15px",
      }
    : { borderBottom: "none" };

  const color = condicion2
    ? {
        color: "#ffffff",
      }
    : { color: "#333333" };

  return (
    <h2 className="subtitulo_seccion" style={{ ...color, ...border }}>
      {contenido}
    </h2>
  );
};

export default Subtitulo;
