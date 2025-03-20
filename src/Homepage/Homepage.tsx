import React from "react";
import { Navbar, Container, Nav, Button, Carousel } from "react-bootstrap";
import HeadLogo from "../assets/serve-together-1.png";
import HeroImg1 from "../assets/hands 11.jpg";
import './Homepage.css'

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className="background">
        <Container>
          <Navbar.Brand href="#home">
            <img src={HeadLogo} width="200" alt="ServeTogether Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="theme">Home</Nav.Link>
              <Nav.Link href="#about" className="theme">About Us</Nav.Link>
              <Nav.Link href="#events" className="theme">Events</Nav.Link>
              <Nav.Link href="#volunteers" className="theme">Volunteers</Nav.Link>
              <Nav.Link href="#requests"className="theme">Requests</Nav.Link>
            </Nav>
            <div className="d-flex gap-2 ms-3">
              <Button variant="primary">Login</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero-section px-5">
        <Carousel className="hero-container">
          <Carousel.Item>
            <img className="d-block w-100" src={HeroImg1} alt="First slide" />
            <div className="overlay"></div>
            <Carousel.Caption className=" text-start caption-center">
            <h3 className="cap fw-bolder">“Be the change you want”</h3>
              <p>- Mahatma Gandhi</p>
              <p className="cap2">Every helping hand matters. Find opportunities, contribute, and inspire positive change.</p>
              <div className="d-flex gap-2">
                <Button variant="primary">Find Volunteer Opportunities</Button>
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
                <Button variant="primary">Find Volunteer Opportunities</Button>
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
                <Button variant="primary">Find Volunteer Opportunities</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>
      </div>
    </>
  );
};

export default Homepage;
