import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCamera } from "react-icons/bs";
// import Footer from "../components/footer";
import "./Volunteers.css";

const EditProfile: React.FC = () => {
  return (
    <>
      {/* Edit Profile Form */}
      <div className="editprofile flex-grow-1 d-flex p-5 justify-content-center align-items-center">
        <Container className="edit bg-white shadow-sm p-5 rounded w-100" style={{ maxWidth: "800px" }}>
          <h3 className="fw-bold pt-3 pb-3">Edit Profile</h3>
          <Button variant="outline-secondary" className="d-flex align-items-center border-black">
            <BsCamera className="me-2" /> Add a profile photo
          </Button>

          <Form className="mt-4">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control className="border-black" type="text" value="Pre-Filled" readOnly />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control className="border-black" type="email" value="Pre-Filled" readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control className="border-black" type="number" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control className="border-black" type="tel" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control className="border-black" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>Preferred Cities</Form.Label>
              <Form.Control className="border-black" type="text" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control className="border-black" type="text" />
            </Form.Group>

            <Container className=" d-flex mt-4 justify-content-center align-items-center gap-4 pb-3 pt-3">
              <Button variant="primary" className="px-5">
                Save
              </Button>
              <Button variant="primary" className="px-5">
                Cancel
              </Button>
            </Container>
          </Form>
        </Container>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default EditProfile;
