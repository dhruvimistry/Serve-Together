import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./Eventcard";
import  "./featuredevents.css";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router";


const FeaturedEvents: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="bg-white">
      <h1 className="name text-center fw-bold mb-4 pt-5">Featured Events</h1>
      <Container>
        <Row className="main g-4 py-5">
          <Col lg={6} sm={12}>
            <EventCard
              title="Bright Future Foundation"
              subtitle="Teach for a Change"
              location="Sunshine Community Center"
              dateTime="20th March 2025 | 10:00 AM - 2:00 PM"
              skills="Teaching, Communication, Patience"
            />
          </Col>

          <Col lg={6} sm={12}>
            <EventCard
              title="Hope Foundation"
              subtitle="Art & Creativity Workshop"
              location="Hope Foundation Center"
              dateTime="30th March 2025 | 11:00 AM - 3:00 PM"
              skills="Painting, Crafting, Creativity"
            />
          </Col>
        </Row>
        <div className="pt-5 text-center pb-5">
          <CustomButton label="View more events" variant="dark" onClick={() => navigate('/events')}/>
        </div>
      </Container>
    </Container>
  );
};

export default FeaturedEvents;
