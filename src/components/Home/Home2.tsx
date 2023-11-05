import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import codeforces from "../../assets/codeforces.svg";
import leetcode from "../../assets/leetcod.svg";
const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6rem" }}>
              Let Me Intoduce <span className="purple">Myself</span>
            </h1>
            <p className="home-about-body">
              I am a dedicated Full Stack Web Developer and Competitive
              Programming enthusiast currently pursuing my Bachelor's degree in
              Technology from the esteemed
              <span
                className="purple"
                style={{ marginRight: "5px", marginLeft: "8px" }}
              >
                Indian Institute of Technology (Indian School of Mines) Dhanbad.
              </span>
              With a strong passion for innovation and problem-solving, I
              actively contribute to the Open Source community while
              continuously honing my skills in crafting seamless web experiences
              and unraveling complex coding challenges.
              <br />
              <br /> I am expert in Technologies like
              <i>
                <b className="purple">
                  {" "}
                  HTML, C/C++, Javascript, NodeJS, ExpressJS, ReactJS, Python.
                </b>
              </i>
              <br />
              <br />
              My intrest lies on using new
              <i>
                <b
                  className="purple"
                  style={{ marginRight: "5px", marginLeft: "8px" }}
                >
                  technologies and constructing Web Products.{" "}
                </b>
                Also I have experience as a member of{" "}
                <b className="purple">
                  RoboISM: Official Robotics Club of IIT Dhanbad.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} alt="myAvatar" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on my Social Networks</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/keshav-gupta19"
                  target="_blank"
                  rel="norefferer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/keshav-gupta-a4b535228/"
                  target="_blank"
                  rel="norefferer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/___keshav___gupta/"
                  target="_blank"
                  rel="norefferer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/coderguy1911"
                  target="_blank"
                  rel="norefferer"
                  className="icon-colour home-social-icons"
                >
                  <img
                    src={codeforces}
                    alt="Codeforces"
                    style={{ color: "green" }}
                  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/keshav_gupta_19/"
                  target="_blank"
                  rel="norefferer"
                  className="icon-colour home-social-icons"
                >
                  <img
                    src={leetcode}
                    alt="Codeforces"
                    style={{ color: "green" }}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
