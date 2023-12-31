import Subtitulo from "../components/Subtitulo";
import Profile from "../components/Profile";

const SeccionProfile = () => {
  const colorSubtitulo = "#ffffff";
  return (
    <div className="seccion_profile">
      <Subtitulo color={colorSubtitulo} contenido={"Profile"} id="profile" />
      <Profile />
    </div>
  );
};

export default SeccionProfile;
