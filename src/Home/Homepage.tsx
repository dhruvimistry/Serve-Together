import React from "react";
import { Container, Button, Row, Col, Carousel, Accordion, Image } from "react-bootstrap";
import HeroImg1 from "../assets/hands 11.jpg";
import Vision from "../assets/vision.webp";
import './Homepage.css';
import FeaturedEvents from "../components/common/featuredevents";
import CustomButton from "../components/common/CustomButton";

const Homepage: React.FC = () => {
  return (
    <>
      <Container className="hero-section ">
        <Carousel className="hero-container ">
          {[...Array(3)].map((_, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 common-radius" src={HeroImg1} alt={`Slide ${index + 1}`} />
              <div className="overlay common-radius"></div>
              <Carousel.Caption className="text-start caption-center">
                <h3 className="caption fw-bolder">“Be the change you want”</h3>
                <p className="caption1 text-light">- Mahatma Gandhi</p>
                <p className="caption2 text-light">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
                <div className="hero-btn pt-2">
                  <Button className="border-0 w-30 " style={{ backgroundColor: "#003366" }}>
                    Find Volunteer Opportunities
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className="about py-5 ">
        <h3 className="name fw-bold text-center pb-4">About Us</h3>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
          </Col>
          <Col md={6} >
            <h2 className="section-heading fw-bold ">Serve Together – Empowering Change, One Step at a Time</h2>
            <p className="section-info pt-3" style={{ textAlign: "justify", color: " #37474F" }}>
              A platform connecting volunteers with NGOs, orphanages, and community initiatives to create a meaningful impact.
              Whether you can teach, mentor, organize events, or help in any way, this platform bridges the gap between skilled
              individuals and organizations in need.
            </p>
            <div className="learn text-md-start">
              <CustomButton variant="primary" label="Learn More" />
            </div>
          </Col>
        </Row>
      </Container>

      <FeaturedEvents />

      <Container className="change py-5 ">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
          </Col>
          <Col md={6} className="read">
            <h2 className="section-heading fw-bold">Ready to Make a Change?</h2>
            <p className="section-info pt-3" style={{ textAlign: "justify", color: " #37474F" }}>
              Join hands with NGOs & volunteers to create a better world! Whether you want to share your skills or need
              volunteers for your cause, Serve Together is here to connect you.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <CustomButton variant="primary" label="Register As NGO" />
              <CustomButton variant="primary" label="Sign Up As Volunteer" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="questions my-5">
        <h3 className="name fw-bold text-center">Frequently Asked Questions</h3>
        <h3 className="fw-light text-center pt-3 pb-4">Your Queries Answered Here !!</h3>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="pt-0">Who can register as a volunteer?</Accordion.Header>
            <Accordion.Body>
              Anyone with a passion for making a change can register as a volunteer.
              Whether you are a professional or simply someone willing to share your skills, your contribution is valuable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="pt-0">How do I find NGOs or orphanages to volunteer with?</Accordion.Header>
            <Accordion.Body>
              You can find NGOs and orphanages on Serve Together by exploring the "Events" section.
              Filter by location or cause, connect with organizations directly, and apply for roles that match your skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="pt-0">How can NGOs find volunteers?</Accordion.Header>
            <Accordion.Body>
              NGOs can easily browse through volunteer profiles based on their skills and location.
              The platform allows you to filter volunteers to find the perfect match for your organization's needs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Homepage;
