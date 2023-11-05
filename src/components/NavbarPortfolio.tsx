import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import logo from "../assets/finalLogo.png";
import { ImInstagram } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
const NavbarPortfolio = () => {
  const [expand, setExpand] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} style={{transform:"scale(2)"}} className="img-fluid logo" alt="brand" />          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setExpand(expand ? false : true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => setExpand(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About Me
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => setExpand(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => setExpand(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Curriculum
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://www.instagram.com/___keshav___gupta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImInstagram style={{ marginBottom: "2px" }} /> Instagram
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/keshav-gupta19"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPortfolio;
