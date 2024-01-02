import FotoProfile from "../imagenes/profile_foto.jpeg";

const Profile = () => {
  return (
    <div className="contendor_profile">
      <p className="texto_profile">
        Santu Horisada studied from an early age 1 year of drawing, 4 years of
        manga and 1 year of sumi-e. He started tattooing in 2007. His work is
        characterized by having a great content of symbology, the result of its
        his personal interest in the history of Asia, which ranges from
        mythology, Buddhism, Shinto, legends, novels, wars, Japanese folklore,
        among others. The pursuit of his work is to maintain the richness of the
        culture of the traditional Japanese tattoo without deviating too much,
        but also imparting his own vision of tattooing, according to his studies
        both from research in books, as well as from his trips to Japan.
      </p>
      <img className="profile_foto" src={FotoProfile} alt="" />
    </div>
  );
};

export default Profile;
