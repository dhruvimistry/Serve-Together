import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart } from "react-icons/fa";
import "./Eventcard.css"

interface EventCardProps {
  title: string;
  subtitle: string;
  location: string;
  dateTime: string;
  skills: string;
  icon: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, subtitle, location, dateTime, skills, icon }) => {
  return (
    <Card className="event-card shadow-sm border-0 p-3  " style={{background:"#F0F5F9"}}>
      <Card.Body>
        <h4 className="title fw-bold">{title}</h4>
        <p className="texts">
          {icon} {subtitle}
        </p>
        <p className="texts">
          <FaMapMarkerAlt className="text-danger" /> {location}
        </p>
        <p className="texts">
          <FaCalendarAlt className="text-primary" /> {dateTime}
        </p>
        <p className="texts">
          <FaHeart className="text-warning" /> {skills}
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" className="fw-bold">View Details</Button>
          <Button variant="primary" className="fw-bold">Apply</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
