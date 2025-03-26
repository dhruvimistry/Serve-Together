import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProfile from "../../components/common/addprofileimage";
// import { BsCamera } from "react-icons/bs";
// import Footer from "../components/footer";
// import NavBar from "../components/Navbar";

const EditProfile: React.FC = () => {
  return (
    <>
    {/* <NavBar /> */}
      {/* Edit Profile Form */}
      <div className="editprofile flex-grow-1 d-flex justify-content-center align-items-center">
        <Container className="edit bg-white shadow-sm p-5 common-radius w-100">
        <h3 className="fw-bold pt-3 pb-3">Edit Profile</h3>
          <AddProfile/>

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
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control className="border-black" type="tel" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Webside</Form.Label>
                  <Form.Control className="border-black" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>About</Form.Label>
              <Form.Control className="border-black" type="text" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control className="border-black" type="text" />
            </Form.Group>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control className="border-black" type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control className="border-black" type="text" />
                </Form.Group>
              </Col>
            </Row>

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
