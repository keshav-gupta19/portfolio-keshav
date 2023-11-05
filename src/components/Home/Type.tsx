import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Full Stack Web Developer",
            "Competitive Programmer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;
