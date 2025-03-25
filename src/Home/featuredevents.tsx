import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EventCard from "../components/Eventcard";
import  "./featuredevents.css";


const FeaturedEvents: React.FC = () => {
  return (
    <Container fluid className="feature "style={{background:" #FFFFFF"}}>
      <h1 className="name text-center fw-bold mb-4 pt-5">Featured Events</h1>
      <Container>
      <Row className=" main g-4 py-5  ">
        <Col lg={6} md={6} sm={12}>
          <EventCard
            title="Bright Future Foundation"
            subtitle="Teach for a Change"
            location="Sunshine Community Center"
            dateTime="20th March 2025 | ⏰ 10:00 AM - 2:00 PM"
            skills="Teaching, Communication, Patience"
            icon="📌"
          />
        </Col>

        <Col lg={6} md={6} sm={12}>
          <EventCard
            title="Hope Foundation"
            subtitle="Art & Creativity Workshop"
            location="Hope Foundation Center"
            dateTime="30th March 2025 | ⏰ 11:00 AM - 3:00 PM"
            skills="Painting, Crafting, Creativity"
            icon="🎨"
          />
        </Col>
      </Row>
      <div className="pt-5 text-center pb-5">
      <Button className="find ps-5 pe-5  border-0" style={{ backgroundColor: " #003366" }}> View More Events</Button>
    </div>
    </Container>
    </Container>
  );
};

export default FeaturedEvents;
