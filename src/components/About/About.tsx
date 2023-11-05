import { Container, Row, Col } from "react-bootstrap";
import AboutContent from "./AboutContent";
import laptopImg from "../../assets/about2.png";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import Github from "./Github";
import Particle from "../Particle";
const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1rem", paddingBottom: "20px" }}>
              Learn a Little More <strong className="purple">about me</strong>
            </h1>
            <AboutContent />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="LaptopImg" className="img-fluid" />
          </Col>
        </Row>
        <h1>
          Professional <strong className="purple">Skills</strong>
        </h1>
        <TechStack />
        <h1>
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />
        <Github />
      </Container>
    </Container>
  );
};

export default About;
