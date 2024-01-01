import FotoProfile from "../imagenes/profile_foto.jpeg";

const Profile = () => {
  return (
    <div className="contendor_profile">
      <p className="texto_profile">
        Santu Horisada estudió desde temprana edad 1 año de dibujo, 4 años de
        manga y 1 año de sumi-e. Comenzó a tatuar en el 2007. Su trabajo se
        caracteriza por tener un gran contenido de simbología, fruto de su
        interés personal por la historia de Asia, que abarca desde mitología,
        budismo, shinto, leyendas, novelas, guerras, folclore japonés, entre
        otros. La búsqueda de su trabajo es mantener lo rico de la cultura del
        tatuaje japonés tradicional sin desviarse demasiado, pero también
        aportando su propia visión del tatuaje, de acuerdo con su estudio tanto
        por investigación en libros, como por sus viajes a Japón.
      </p>
      <img className="profile_foto" src={FotoProfile} alt="" />
    </div>
  );
};

export default Profile;
