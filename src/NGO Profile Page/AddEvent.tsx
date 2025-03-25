import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import NavBar from "../components/Navbar";

const EditProfile: React.FC = () => {
  return (
    <>
    <NavBar />
      {/* Edit Profile Form */}
      <div className="editprofile flex-grow-1 d-flex p-5 justify-content-center align-items-center">
        <Container className="edit bg-white shadow-sm p-5 rounded w-100" style={{ maxWidth: "800px" }}>
          <h3 className="fw-bold pt-3 pb-3">Add Event</h3>

          <Form className="mt-4">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control className="border-black" type="text" readOnly />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control className="border-black" type="tect" readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control className="border-black" type="number" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <Form.Control className="border-black" type="number" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control className="border-black" type="text" />
            </Form.Group>

            <Container className=" d-flex mt-4 justify-content-center align-items-center gap-4 pb-3 pt-3">
              <Button variant="primary" className="px-5">
                Save
              </Button>
              <Button variant="dark" className="px-5">
                Cancel
              </Button>
            </Container>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
