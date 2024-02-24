import Subtitulo from "./Subtitulo";
import Profile from "./Profile";

const SeccionProfile = () => {
  return (
    <div className="seccion_profile">
      <Subtitulo contenido={"Profile"} condicion={true} condicion2={true} />
      <Profile />
    </div>
  );
};

export default SeccionProfile;
