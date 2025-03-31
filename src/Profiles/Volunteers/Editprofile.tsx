import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CustomButton from "../../components/common/CustomButton";
import AddProfile from "../../components/common/addprofileimage";
// import ProfilePictureUploader from "../../components/ProfilePictureUploader";
// import Footer from "../components/footer";

const EditProfile: React.FC = () => {
  return (
    <>
      {/* Edit Profile Form */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Container className="bg-white shadow-sm p-5 common-radius w-100">
          <h3 className="fw-bold pt-3 pb-3">Edit Profile</h3>
          {/* <ProfilePictureUploader /> */}
          <AddProfile />

          <Form className="mt-4">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control className="input-box" type="email" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control className="input-box" type="number" />
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
                  <Form.Control className="input-box" type="tel" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>Preferred Cities</Form.Label>
              <Form.Control className="input-box" type="text" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control className="input-box" type="text" />
            </Form.Group>

            <Container className="d-flex mt-4 justify-content-center align-items-center gap-4 py-3">
            <CustomButton variant="accept" label="Save" />
            <CustomButton variant="decline" label="Cancel" />
            </Container>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;
