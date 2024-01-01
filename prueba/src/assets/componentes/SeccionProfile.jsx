import Subtitulo from "./Subtitulo";
import Profile from "./Profile";

const SeccionProfile = () => {
  const colorSubtitulo = "#ffffff";
  return (
    <div className="seccion_profile">
      <Subtitulo color={colorSubtitulo} contenido="Profile" />
      <Profile />
    </div>
  );
};

export default SeccionProfile;
