import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProfile from "../../components/common/addprofileimage";
// import { BsCamera } from "react-icons/bs";
<<<<<<< HEAD
=======
import { useForm } from "react-hook-form";
import AddProfile from "../../components/addprofileimage";
>>>>>>> origin/dhruvi
// import Footer from "../components/footer";
// import NavBar from "../components/Navbar";

interface FormData {
  website: string;
  about: string;
  address?: string;
  city?: string;
  state?: string;
}

const NgoEditProfile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Profile updated successfully!");
  };
  
  return (
    <>
    {/* <NavBar /> */}
      {/* Edit Profile Form */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Container className="edit bg-white shadow-sm common-radius w-100">
          <div className="p-5">
          <h3 className="fw-bold pt-3 pb-3">Edit Profile</h3>
          <AddProfile />

          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control className="input-box" type="tel" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mt-3">
              <Form.Label>About</Form.Label>
              <Form.Control
                  as="textarea"
                  className="input-box"
                  {...register("about", {
                    required: "About is required",
                    minLength: {
                      value: 200,
                      message: "About section must be at least 200 characters long",
                    },
                  })}
                />
                {errors.about && <p className="text-danger">{errors.about.message}</p>}
              </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" className="input-box" type="text" />
            </Form.Group>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control className="input-box" type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Container className="d-flex mt-4 justify-content-center align-items-center gap-4 pb-3 pt-3">
              <Button type="submit" className="px-5 btn">
                Save
              </Button>
              <Button className="px-5 btn">
                Cancel
              </Button>
            </Container>
          </Form>
          </div>
        </Container>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NgoEditProfile;