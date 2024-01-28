const Subtitulo = ({ contenido, color }) => {
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
    <h2 className="subtitulo_seccion" style={{ color: color, ...border }}>
      {contenido}
    </h2>
  );
};

export default Subtitulo;
