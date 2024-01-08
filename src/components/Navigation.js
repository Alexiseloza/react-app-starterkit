import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../LogoSfondoScuro.svg";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="formio-brand">
              <Image src={logo} style={{ height: "2.2rem" }}></Image>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="components" className="nav-link">
              Examples
            </Link>
            <Nav.Link href="https://github.com/formio/react">
              <i className="fa fa-book me-1"></i>
              <span>Docs</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
