import React from "react";
import { Card, Table } from "react-bootstrap";
import "./Eventcard.css"
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router";

interface EventCardProps {
  title: string;
  subtitle: string;
  location: string;
  dateTime: string;
  skills: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, subtitle, location, dateTime, skills }) => {
  const navigate = useNavigate();

  return (
    <Card className="event-card shadow-sm border-0" style={{background:"#F0F5F9"}}>
      <Card.Body>
        <h4 className="title fw-bold">{title}</h4>
        <Table>
          <tr>
            <td className="bi bi-megaphone"></td>
            <td>{subtitle}</td>
          </tr>
          <tr>
            <td className="bi bi-geo-alt"></td>
            <td>{location}</td>
          </tr>
          <tr>
            <td className="bi bi-calendar"></td>
            <td>{dateTime}</td>
          </tr>
          <tr>
            <td className="bi bi-star"></td>
            <td>{skills}</td>
          </tr>
        </Table>
        <div className="d-flex justify-content-center gap-2">
          <CustomButton variant="primary" label="View Details" width="w-50" onClick={() => navigate('/events')}/>
          <CustomButton variant="primary" label="Apply" width="w-50" onClick={() => navigate('/events')}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
