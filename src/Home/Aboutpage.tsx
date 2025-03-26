import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Hands22 from '../assets/hands22.jpg'
import Vision from "../assets/vision.webp";
import './Aboutpage.css'
const AboutUs: React.FC = () => {
    return (
        <>
            <Container fluid className="bg-white">
                <h2 className=" name text-center fw-bold text-center py-5 ">About Us</h2>
                <Container className="hero-section common-radius ">
                    <Carousel className="hero-container common-radius">
                        {[...Array(3)].map((_, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={Hands22} alt={`Slide ${index + 1}`} />
                                <div className="overlay"></div>
                                <Carousel.Caption className="text-start caption-center">
                                    <h3 className="cap fw-bolder text-center">Serve Together</h3>
                                    <p className="cap1 text-center text-light">Together,We Build a Better World !</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </Container>
            <Container fluid className="bg-white">
                <Container className="py-5 ">
                    <Row className="align-items-center ">
                        <Col lg={6} className="text-center">
                            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="  fw-bold">Connecting Skills with Purpose</h2>
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
                    <Row className=" ">
                        <Col lg={6}>
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
                        <Col lg={6} className="text-center">
                            <Image src={Vision} alt="Vision" fluid className="rounded shadow-sm" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default AboutUs;
