import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart } from "react-icons/fa";

const FeaturedEvents: React.FC = () => {
    return (
        <Container fluid className=" feature p-5">
            <h1 className=" name text-center fw-bold mb-4">Featured Events</h1>
            <Row className=" cards p-5">
                <Col lg={6} className="  card1 ps-5 ">
                    <Card className="shadow-sm border-0 p-3 " style={{ borderRadius: "20px" , backgroundColor: "#F0F5F9"}}>
                        <Card.Body className="pe-0">
                            <h4 className=" title fw-bold">Bright Future Foundation</h4>
                            <p className="texts ">📌 Teach for a Change</p>
                            <p className="texts ">
                                <FaMapMarkerAlt className="text-danger" /> Sunshine Community Center
                            </p>
                            <p className="texts ">
                                <FaCalendarAlt className="text-primary" /> 20th March 2025 | ⏰ 10:00 AM - 2:00 PM
                            </p>
                            <p className="texts ">
                                <FaHeart className="text-warning" /> Teaching, Communication, Patience
                            </p>
                            <div className="buttons d-flex gap-5">
                                <Button variant="primary" className="learnmore fw-bold">
                                    View Details
                                </Button>
                                <Button variant="primary" className="learnmore fw-bold">
                                    Apply
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} className=" card2  pe-5">
                    <Card className="shadow-sm border-0 p-3" style={{ borderRadius: "15px" ,backgroundColor: "#F0F5F9" }}>
                        <Card.Body className="pe-0">
                            <h4 className=" title fw-bold">Hope Foundation</h4>
                            <p className="texts ">🎨 Art & Creativity Workshop</p>
                            <p className="texts ">
                                <FaMapMarkerAlt className="text-danger" /> Hope Foundation Center
                            </p>
                            <p className="texts ">
                                <FaCalendarAlt className="text-primary" /> 30th March 2025 | ⏰ 11:00 AM - 3:00 PM
                            </p>
                            <p className="texts ">
                                <FaHeart className="text-warning" /> Painting, Crafting, Creativity
                            </p>
                            <div className="buttons  d-flex gap-5">
                                <Button variant="primary" className="learnmore  fw-bold">
                                    View Details
                                </Button>
                                <Button variant="primary" className="learnmore   fw-bold">
                                    Apply
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="text-center ">
                <Button className="   view  fw-bold">
                    View MOre Events
                </Button>
            </div>
        </Container>
    );
};

export default FeaturedEvents;
