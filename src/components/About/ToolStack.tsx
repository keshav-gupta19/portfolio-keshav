import { Row, Col } from "react-bootstrap";
import { SiAntdesign, SiBootstrap, SiGit, SiGithub, SiVisualstudiocode } from "react-icons/si"
const ToolStack = () => {
  return (
    <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
};

export default ToolStack;
