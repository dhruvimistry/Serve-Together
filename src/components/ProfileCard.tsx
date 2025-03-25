import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaUser, FaCalendarAlt, FaUserCircle } from "react-icons/fa";

interface ProfileCardProps {
  name: string;
  role: string;
  gender: string;
  age: string;
  phone: string;
  email: string;
  skills: string[];
  cities: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, gender, age, phone, email, skills, cities }) => {
  return (
    <Container className="p-5">
      <Row className="g-4">
        {/* Left Profile Section */}
        <Col lg={6}>
          <Card className="p-4 text-center common-radius shadow-sm">
            <div className="text-center">
            <FaUserCircle size={80} className="text-secondary " />
            <h4 className="mt-2">{name}</h4>
            <p className="text-muted">{role}</p>
            </div>

            <Row className="text-start">
              <Col>
                <h6 className="fw-bold">Personal Information</h6>
                <p><FaUser className="me-2" /> {gender}</p>
                <p><FaCalendarAlt className="me-2" /> {age}</p>
              </Col>
              <Col>
                <h6 className="fw-bold">Contact Information</h6>
                <p><FaPhoneAlt className="me-2" /> {phone}</p>
                <p><FaEnvelope className="me-2" /> {email}</p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Right Skills & Cities Section */}
        <Col lg={6}>
          <Card className="common-radius shadow-sm p-4">
            <h6 className="fw-bold">Skills</h6>
            <div className="mb-3">
              {skills.map((skill) => (
                <Badge key={skill} bg="light" text="dark" className="me-2 p-2 border common-radius fw-light">
                  {skill}
                </Badge>
              ))}
            </div>

            <h6 className="fw-bold">Preferred Cities</h6>
            <div>
              {cities.map((city) => (
                <Badge key={city} bg="light" text="dark" className="me-2 p-2 border common-radius fw-light">
                  {city}
                </Badge>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCard;
