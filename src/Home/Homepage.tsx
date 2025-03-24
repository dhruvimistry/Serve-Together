import React from "react";
import { Container, Button, Row, Col, Carousel, Accordion } from "react-bootstrap";
// import HeadLogo from "../assets/serve-together-1.png";
import HeroImg1 from "../assets/hands 11.jpg";
import './Homepage.css'
import FeaturedEvents from "./featuredevents";
import Footer from "../components/footer";
import NavBar from "../components/Navbar";

const Homepage: React.FC = () => {
  return (
    <>
      <NavBar />

      <Container className="hero-section">
        <Carousel className="hero-container">
          <Carousel.Item>
            <img className="d-block w-100" src={HeroImg1} alt="First slide" />
            <div className="overlay"></div>
            <Carousel.Caption className=" text-start caption-center">
              <h3 className="cap fw-bolder">“Be the change you want”</h3>
              <p>- Mahatma Gandhi</p>
              <p className="cap2">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
              <div className="d-flex gap-2">
              <Button className="find border-0" style={{ backgroundColor: " #003366" }}>Find Volunteer Opportunities</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={HeroImg1} alt="Second slide" />
            <div className="overlay"></div>
            <Carousel.Caption className="text-start caption-center">
              <h3 className="cap fw-bolder">“Be the change you want”</h3>
              <p>- Mahatma Gandhi</p>
              <p className="cap2">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
              <div className="d-flex gap-2 ">
              <Button className="find border-0" style={{ backgroundColor: " #003366" }}>Find Volunteer Opportunities</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={HeroImg1} alt="Third slide" />
            <div className="overlay"></div>
            <Carousel.Caption className="text-start caption-center">
              <h3 className="cap fw-bolder">“Be the change you want”</h3>
              <p>- Mahatma Gandhi</p>
              <p className="cap2">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
              <div className="d-flex gap-2  ">
                <Button className="find border-0" style={{ backgroundColor: " #003366" }}>Find Volunteer Opportunities</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </Container>
      <Container className="about" style={{ backgroundColor: "#F0F5F9" }}>
        <h3 className=" name fw-bold  mb-3 text-center pb-5">About Us</h3>
        <Row className="align-items-center">
          <Col md={6} className="text-center pt-2">
            <img
              src="/about-us-image.png"
              alt="About Us"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold " style={{ color: "#37474F" }}>
              Serve Together – Empowering Change, One Step at a Time
            </h2>
            <p className="info fw-bold pt-3">
              A platform connecting volunteers with NGOs, orphanages, and
              community initiatives to create a meaningful impact. Whether you can
              teach, mentor, organize events, or help in any way, this platform
              bridges the gap between skilled individuals and organizations in
              need.
            </p>
            <Button variant="primary" className=" learnmore  mt-4 fw-bold">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <FeaturedEvents />

      <Container className=" change p-5" style={{ backgroundColor: "#F0F5F9" }}>
        <Row className="align-items-center">
          <Col md={6} className="text-center pt-2">
            <img
              src="/change-image.png"
              alt="Change"
              className="img-fluid"
              style={{ maxWidth: "auto", height: "auto" }}
            />
          </Col>
          <Col md={6}>
            <h2 className=" name pt-5 fw-bold">Ready to Make a Change?</h2>
            <p className=" info fw-bold  pt-5 ">
              Join hands with NGOs & volunteers to create a better world! Whether
              you want to share your skills or need volunteers for your cause,
              Serve Together is here to connect you.
            </p>
            <div className=" pt-5 d-flex gap-5">
              <Button variant="primary" className="fw-bold">
                Register As NGO
              </Button>
              <Button variant="primary" className="fw-bold">
                Sign Up As Volunteer
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="questions mt-4" >
        <h3 className=" name fw-bold text-center">Frequently Asked Questions</h3>
        <h3 className="fw-light text-center pt-5" >Your Queries Answered Here !!</h3>

        <Accordion className="pt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="que1" style={{  }}>Who can register as a volunteer ?</Accordion.Header>
            <Accordion.Body className="texts">
              Anyone with a passion for teaching, art, sports, or mentorship can register as a volunteer.
              Whether you are a professional or simply someone willing to share your skills, your contribution is valuable.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="pt-5">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="que1">How do I find NGOs or orphanages to volunteer with ?</Accordion.Header>
            <Accordion.Body className="texts">
              You can find NGOs and orphanages on Serve Together by exploring the "Volunteers" section.
              Filter by location or cause, connect with organizations directly, and apply for roles that match your skills.
              You can also join community events and group volunteering programs to make an impact!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className="pt-5">
          <Accordion.Item eventKey="2">
            <Accordion.Header className="que1">How can NGOs find volunteers ?</Accordion.Header>
            <Accordion.Body className="texts">
              NGOs can easily browse through volunteer profiles based on their skills and location.
              The platform allows you to filter volunteers to find the perfect match for your organization's needs.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      < Footer />
    </>
  );
};

export default Homepage;
