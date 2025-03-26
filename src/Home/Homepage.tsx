import React from "react";
import { Container, Button, Row, Col, Carousel, Accordion, Image } from "react-bootstrap";
import HeroImg1 from "../assets/hands 11.jpg";
import Vision from "../assets/vision.webp";
import './Homepage.css';
import FeaturedEvents from "./featuredevents";

const Homepage: React.FC = () => {
  return (
    <>
      <Container  className="hero-section ">
        <Carousel className="hero-container ">
          {[...Array(3)].map((_, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 common-radius" src={HeroImg1} alt={`Slide ${index + 1}`} />
              <div className="overlay common-radius"></div>
              <Carousel.Caption className="text-start caption-center">
                <h3 className="cap fw-bolder">“Be the change you want”</h3>
                <p className="cap1 text-light">- Mahatma Gandhi</p>
                <p className="cap2 text-light">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
                <div className="d-flex gap-2">
                  <Button className="oppo border-0" style={{ backgroundColor: "#003366" }}>
                    Find Volunteer Opportunities
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container  className="about py-5 ">
        <h3 className="name fw-bold text-center pb-5">About Us</h3>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
          </Col>
          <Col md={6} >
            <h2 className="serve fw-bold ">Serve Together – Empowering Change, One Step at a Time</h2>
            <p className="info fw-bold pt-3" style={{textAlign: "justify" ,color:" #5C6970"}}>
              A platform connecting volunteers with NGOs, orphanages, and community initiatives to create a meaningful impact.
              Whether you can teach, mentor, organize events, or help in any way, this platform bridges the gap between skilled
              individuals and organizations in need.
            </p>
            <div className="text-center text-md-start">
              <Button variant="primary" className="learnmore mt-4 fw-bold">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <FeaturedEvents />

      <Container  className="change py-5 ">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
          </Col>
          <Col md={6} className="read">
            <h2 className="nam fw-bold">Ready to Make a Change?</h2>
            <p className="info fw-bold pt-3"  style={{textAlign: "justify"  ,color:" #5C6970"}}>
              Join hands with NGOs & volunteers to create a better world! Whether you want to share your skills or need
              volunteers for your cause, Serve Together is here to connect you.
            </p>
            <div className="pt-4 d-flex flex-column flex-md-row justify-content-center gap-3">
              <Button variant="primary" className="fw-bold">Register As NGO</Button>
              <Button variant="primary" className="fw-bold">Sign Up As Volunteer</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="questions my-5">
        <h3 className="name fw-bold text-center">Frequently Asked Questions</h3>
        <h3 className="fw-light text-center pt-3 pb-4">Your Queries Answered Here !!</h3>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who can register as a volunteer?</Accordion.Header>
            <Accordion.Body>
              Anyone with a passion for teaching, art, sports, or mentorship can register as a volunteer.
              Whether you are a professional or simply someone willing to share your skills, your contribution is valuable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I find NGOs or orphanages to volunteer with?</Accordion.Header>
            <Accordion.Body>
              You can find NGOs and orphanages on Serve Together by exploring the "Volunteers" section.
              Filter by location or cause, connect with organizations directly, and apply for roles that match your skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How can NGOs find volunteers?</Accordion.Header>
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
