import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Requestpage.css";
import CustomButton from "../components/common/CustomButton";

interface Volunteer {
  name: string;
  event: string;
  skills: string[];
}

const events = [
  "Art & Creativity Workshop",
  "Sports for All",
  "Clean & Green Drive",
  "Music & Dance Therapy",
  "Storytelling & Reading Drive",
];

const allVolunteers: Volunteer[] = [
  {
    name: "Dhruvil Mistry",
    event: "Art & Creativity Workshop",
    skills: ["Teaching", "Communication", "Patience"],
  },
  {
    name: "Aarav Patel",
    event: "Sports for All",
    skills: ["Leadership", "Teamwork", "Motivation"],
  },
  {
    name: "Riya Sharma",
    event: "Music & Dance Therapy",
    skills: ["Creativity", "Performance", "Engagement"],
  },
];

const Requests: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>(events[0]);

  return (
    <Container className="mt-2 mb-5">
      <Row className="gy-4 common-radius">
        {/* event section */}

        <Col xs={12} md={4}>
          <Card className="p-3 event-card bg-white border-0 common-radius">
            <Card.Title>Events</Card.Title>
            {events.map((event, index) => (
              <Button
                  key={index}
                  variant={selectedEvent === event ? "primary" : "light"}
                  className={`event-button ${selectedEvent === event ? "selected" : ""}`}
                  onClick={() => setSelectedEvent(event)}
              >
                  {event}
              </Button>
            ))}
          </Card>
          <Card className="p-3 mt-3 event-details-card border-0 common-radius">
            <Card.Title>Event Details</Card.Title>
            <Card.Text>
              <strong>Event:</strong> {selectedEvent}
              <br />
              <strong>Pending Requests:</strong>{" "}
              {allVolunteers.filter((v) => v.event === selectedEvent).length}
              <br />
              <strong>Accepted Volunteers:</strong> 0
            </Card.Text>
          </Card>
        </Col>

        {/* reqests section */}

        <Col xs={12} md={8}>
          <Card className="p-3 volunteer-card border-0 common-radius">
              <Card.Title>Volunteers for the Event</Card.Title>
              {allVolunteers.filter((v) => v.event === selectedEvent).length > 0 ? (
                allVolunteers
                  .filter((v) => v.event === selectedEvent)
                  .map((volunteer, index) => (
                    <Card className="p-2 mt-2 volunteer-item" key={index}>
                      <Table className="mb-0">
                        <tr>
                          <td className="d-flex align-items-top">
                            <Card.Text>
                              <strong>{volunteer.name}</strong> has applied for{" "}
                              <strong>{volunteer.event}</strong>
                              <br />
                              <strong>Skills:</strong> {volunteer.skills.join(", ")}
                            </Card.Text>
                          </td>
                          <td className="w-25"> 
                            <div className="d-flex flex-column justify-content-end gap-2 common-radius">
                              <CustomButton variant="accept" label="Accept"/>
                              <CustomButton variant="decline" label="Decline"/>
                            </div>
                          </td>
                        </tr>
                      </Table>
                    </Card>
                  ))
              ) : (
                <p>No pending requests for this event.</p>
              )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Requests;
