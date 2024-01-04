const Titulo = ({ shopName }) => {
  const estiloTitulo = {
    color: "#333333",
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: "3rem",
    margin: "3rem",
    letterSpacing: "0.2em",
  };

  return (
    <div className="contenedor_titulo">
      <h1 style={estiloTitulo}>{shopName}</h1>
    </div>
  );
};

export default Titulo;
