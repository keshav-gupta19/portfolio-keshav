import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Made with 💖 by Keshav Gupta</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright @ {year} KG</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/keshav-gupta19"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferer"
              >
                <AiFillTwitterCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/___keshav___gupta/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/keshav-gupta-a4b535228/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferer"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
