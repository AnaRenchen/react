const Subtitulo = ({ contenido, color, id }) => {
  let border =
    contenido == "Profile"
      ? {
          borderBottom: "1px solid white",
          width: "42%",
          textAlign: "left",
          paddingBottom: "15px",
        }
      : { borderBottom: "none" };

  return (
    <h2
      className="subtitulo_seccion"
      id={id}
      style={{ color: color, ...border }}
    >
      {contenido}
    </h2>
  );
};

export default Subtitulo;
