import React from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaUserCircle, FaPhoneAlt, FaEnvelope, FaUser, FaCalendarAlt } from "react-icons/fa";
import HeadLogo from "../assets/serve-together-1.png";

const VolunteerProfileViewers: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className="p-3 px-5 px-3" style={{ background: "#F5F8FC" }}>

        <Navbar.Brand href="#" className="fw-bold text-primary d-flex align-items-center">
          <img src={HeadLogo} style={{ height: "40px", marginRight: "10px" }} />

        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#" className="theme">Home</Nav.Link>
          <Nav.Link href="#" className="theme">About</Nav.Link>
          <Nav.Link href="#" className="theme">Events</Nav.Link>
          <Nav.Link href="#" className="theme">Volunteers</Nav.Link>
          <Nav.Link href="#" className="theme">Requests</Nav.Link>
          <Nav.Link href="#">
            <FaUserCircle size={24} className="text-primary" />
          </Nav.Link>
        </Nav>

      </Navbar>

      {/* Profile Section */}
      <Container className=" pro  bg-white common-radius">
        <div className="d-flex  mb-3">
          <h3 className="fw-bold">Profile</h3>
          <Button variant="primary" className=" d-flex justify-content-end">Invite</Button>
        </div>
      </Container>
      <Container className="p-5">
        <Row>
          <Col md={6}>
            <Card className="p-5  common-radius ">
              <div className="text-center">
                <img
                  src="/pro.png"
                  alt="Profile"
                  className="rounded-circle border"
                  style={{ width: "100px", height: "100px" }}
                />
                <h4 className="mt-2">Alice Jane</h4>
                <p className="text-muted">Volunteer</p>
              </div>
              <Row>
                <Col>
                  <h6 className="fw-bold">Personal Information</h6>
                  <p>
                    <FaUser className="me-2" /> She/Her
                  </p>
                  <p>
                    <FaCalendarAlt className="me-2" /> 21
                  </p>
                </Col>
                <Col>
                  <h6 className="fw-bold">Contact Information</h6>
                  <p>
                    <FaPhoneAlt className="me-2" /> +91 98765 43210
                  </p>
                  <p>
                    <FaEnvelope className="me-2" /> someone@mail.com
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <Card  className="common-radius">
              <Container className="p-5 ">
              <h6 className="fw-bold">Skills</h6>
              <div className="mb-3 input-box">
                {["Art", "Teaching", "Dancing", "Nutrition Guidance"].map((skill) => (
                  <Badge key={skill} bg="none" text="dark" className="me-2 p-2 border common-radius fw-light">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h6 className="fw-bold">Preferred Cities</h6>
              <div>
                {["Surat", "Navsari"].map((city) => (
                  <Badge key={city} bg="none" text="dark" className="me-2 p-2 border  common-radius fw-light">
                    {city}
                  </Badge>
                ))}
              </div>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VolunteerProfileViewers;