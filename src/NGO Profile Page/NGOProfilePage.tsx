import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import HeadLogo from "../assets/serve-together-1.png";

const App: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className="p-3 px-5" style={{ background: "#F5F8FC" }}>
        <Navbar.Brand
          href="#"
          className="fw-bold text-primary d-flex align-items-center"
        >
          <img src={HeadLogo} style={{ height: "40px", marginRight: "10px" }} />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Volunteers</Nav.Link>
          <Nav.Link href="#">Requests</Nav.Link>
          <Nav.Link href="#">
            <FaUserCircle size={24} className="text-primary" />
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Profile</h3>
          <Button variant="primary">Edit</Button>
        </div>

        <Row className="mt-3">
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0">
              <div className="text-center">
                <FaUserCircle size={80} className="text-secondary" />
                <h4 className="mt-2">Hope Foundation</h4>
                <p className="text-muted">NGO</p>
              </div>
              <h6 className="fw-bold">Address</h6>
              <p>
                <FaMapMarkerAlt className="me-2" /> 5 Street Hope, Near River Church, 
                Navsari, Gujarat - 396445
              </p>
              <h6 className="fw-bold">Contact Information</h6>
              <p>
                <FaPhoneAlt className="me-2" /> +91 98765 43210
              </p>
              <p>
                <FaEnvelope className="me-2" /> someone@mail.com
              </p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0">
              <h6 className="fw-bold">About</h6>
              <p>
                Hope Foundation is a Nonprofit Organization committed to transforming the lives of
                underprivileged children through education and skill development. We believe in
                fostering a world where every child is nurtured, empowered, and given the right
                opportunities.
              </p>
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <h3 className="fw-bold">Events</h3>
          <Button variant="primary">Add</Button>
        </div>

        <Row className="mt-3">
          {["Art & Creativity Workshop", "Gardening Workshop", "Music & Dance Training", "Speech for All"].map((event, idx) => (
            <Col md={6} key={idx} className="mb-3">
              <Card className="p-4 shadow-sm border-0">
                <h6 className="fw-bold">{event}</h6>
                <p>
                  <FaCalendarAlt className="me-2" /> 19th March 2025 | 3:00 PM
                </p>
                <p>Workshop, Creativity</p>
                <Button variant="danger">Delete</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="text-center py-4" style={{ background: "#F5F8FC" }}>
        <img src={HeadLogo} style={{ height: "40px" }} />
        <div className="mt-2">
          <Nav className="justify-content-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Volunteers</Nav.Link>
            <Nav.Link href="#">Requests</Nav.Link>
          </Nav>
        </div>
        <p className="text-muted mt-2">&copy; Copyright Serve Together 2025</p>
      </footer>
    </>
  );
};

export default App;