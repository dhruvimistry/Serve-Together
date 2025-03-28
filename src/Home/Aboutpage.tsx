import React from "react";
import { Container, Row, Col, Carousel, Image,  Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Hands22 from '../assets/hands22.jpg'
import Vision from "../assets/vision.webp";
import Change from "../assets/change.jpg"
import './Aboutpage.css'
import CustomButton from "../components/common/CustomButton";
const AboutUs: React.FC = () => {
    return (
        <>
            <Container fluid className="bg-white">
                <h2 className=" name text-center fw-bold text-center py-5 ">About Us</h2>
                <Container className="hero-section  ">
                    <Carousel className="hero-container ">
                        {[...Array(3)].map((_, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100 common-radius" src={Hands22} alt={`Slide ${index + 1}`} />
                                <div className="overlay common-radius"></div>
                                <Carousel.Caption className="text-start caption-center">
                                    <h3 className="cap fw-bolder text-center">Serve Together</h3>
                                    <p className="cap1 text-center text-light">Together,We Build a Better World !</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </Container>
            <Container fluid className="  bg-white">
                <Container className=" py-5 ">
                    <Row className="align-items-center ">
                        <Col md={6} className="text-center">
                            <Image src={Vision} alt="Vision" fluid className="common-radius" />
                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold">Connecting Skills with Purpose</h2>
                            <p>
                                At Serve Together, we believe that everyone has something valuable
                                to offer—be it teaching, mentoring, coaching, or creative skills.
                                Our platform is designed to connect passionate volunteers with NGOs,
                                orphanages, and community centers that need skilled individuals to
                                create a lasting impact.
                            </p>
                            <p>
                                We make it easy for volunteers to share their expertise and for
                                organizations to find the right people to support their
                                initiatives. By fostering a collaborative and skill-based
                                volunteering community, we empower people to bring meaningful
                                change to those in need.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container >
            <Container fluid className="py-5">
    <Row className="align-items-center">
        <Col md={6} className="order-md-last text-center">
            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm w-85 mx-auto" />
        </Col>
        <Col md={6}>
            <h2 className="fw-bold">Our Vision</h2>
            <p>
                We envision a world where education, creativity, and skill-sharing
                can uplift communities and provide equal opportunities for all. By
                enabling volunteers and NGOs to work together, we strive to bridge
                the gap between willingness and need.
            </p>
            <p>
                <strong>
                    "A small act of kindness can create a ripple of change."
                </strong>
            </p>
            <p>
                Our goal is to provide a seamless platform where every individual,
                regardless of background, can contribute to social change in their
                own unique way.
            </p>
        </Col>
    </Row>
</Container>
</Container>
            <Container fluid className="bg-light">
            <Container  className=" py-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <Card>
                            <Card.Img
                                src={Change}
                            />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h3 className="fw-bold">Stories of Change</h3>
                        <p>
                            “Through Serve Together, I found a way to teach underprivileged children every
                            weekend. It’s been the most fulfilling experience!” <br />
                            <strong>– Aarav, Volunteer</strong>
                        </p>
                        <p>
                            “We were struggling to find skilled mentors for our orphanage kids. Serve Together
                            helped us connect with amazing volunteers!” <br />
                            <strong>– Hope Foundation, NGO</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
            </Container>
            <Container  fluid  className="join">
                <Container>
                <Row className=" text-start py-5">
                    <Col>
                        <h3 className="fw-bold">Join Us & Make a Difference!</h3>
                        <p>
                            Whether you are a volunteer looking to contribute your skills or an NGO searching
                            for passionate individuals, Serve Together is the platform to connect, learn, and
                            grow together.
                        </p>
                        <div className="gap-4 py-2 d-flex">
                        <CustomButton label="Become a Volunteer" variant="primary" />
                        <CustomButton label="Register Your NGO" variant="primary" />
                        </div>
                    </Col>
                </Row>
                </Container>
            </Container>
        </>
    );
};

export default AboutUs;
