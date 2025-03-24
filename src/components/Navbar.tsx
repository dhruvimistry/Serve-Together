import React from "react";
import HeadLogo from "../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="background">
      <Container>
        <Navbar.Brand href="#home">
          <img src={HeadLogo} width="200" alt="ServeTogether Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="theme">Home</Nav.Link>
              <Nav.Link href="#about" className="theme">About Us</Nav.Link>
              <Nav.Link href="#events" className="theme">Events</Nav.Link>
              <Nav.Link href="#volunteers" className="theme">Volunteers</Nav.Link>
              <Nav.Link href="#requests" className="theme">Requests</Nav.Link>
              <Nav.Link href="#">
                <FaUserCircle size={24} className="text-primary" />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
