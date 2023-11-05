import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
const AboutContent = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone. My name is{" "}
            <span className="purple">Keshav Gupta</span>. I am from{" "}
            <span className="purple">Beawar Rajasthan</span>. I am pursuing
            Bachelor of Technology from{" "}
            <span className="purple">
              Indian Institute Of Technology, Dhanbad
            </span>
            .
            <br />
            <br /> Additionally, I am a{" "}
            <span className="purple">full Stack Web Developer</span>. I am also
            a <span className="purple">Coding Enthusiast</span>. I love Solving
            day-to-day life Coding Problems using C/C++ Programming Language.
            <br />
            <br />
            In addition to working and continuously learning to code, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>
          <p style={{ color: "rgb(0, 191, 99)" }}>
            "I want to taste and glory in each day, and never be afraid to experience pain!"
          </p>
          <footer className="blockquote-footer">Sylvia Plath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutContent;
