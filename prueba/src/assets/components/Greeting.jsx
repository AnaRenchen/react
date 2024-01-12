const Greeting = ({ greetingJapan, greetingEnglish }) => {
  return (
    <div>
      <h3 className="greeting">{greetingJapan}</h3>
      <h3 className="greeting">{greetingEnglish}</h3>
    </div>
  );
};

export default Greeting;
