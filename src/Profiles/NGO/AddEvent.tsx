import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../../components/common/CustomButton";
// import Footer from "../components/layout/footer";
// import NavBar from "../components/layout/Navbar";

const AddEvent: React.FC = () => {
  return (
    <>
      {/* Add Event Form */}
      <div className="flex-grow-1 d-flex p-5 justify-content-center align-items-center">
        <Container className="bg-white shadow-sm p-5 common-radius w-100">
          <h3 className="fw-bold pt-3 pb-3">Add Event</h3>

          <Form className="mt-4">
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control className="input-box" type="date" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <Form.Control className="input-box" type="time" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control className="input-box" type="text" />
            </Form.Group>

            <Container className=" d-flex mt-4 justify-content-center align-items-center gap-4 py-3">
              <CustomButton variant="accept" label="Save" />
              <CustomButton variant="decline" label="Cancel" />
            </Container>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default AddEvent;
