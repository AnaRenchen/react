import Subtitulo from "../components/Subtitulo";
import Profile from "../components/Profile";

const SeccionProfile = () => {
  return (
    <div className="seccion_profile">
      <Subtitulo contenido={"Profile"} condicion={true} condicion2={true} />
      <Profile />
    </div>
  );
};

export default SeccionProfile;
