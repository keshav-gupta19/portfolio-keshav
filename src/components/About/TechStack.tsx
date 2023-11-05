import {Row, Col} from "react-bootstrap"
import {SiCplusplus, SiCss3, SiExpress, SiHtml5, SiJavascript, SiJquery, SiMongodb, SiPython, SiReact} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
const TechStack = () => {
  return (
    <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCplusplus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJquery />
        </Col>
    </Row>
  )
};

export default TechStack;
