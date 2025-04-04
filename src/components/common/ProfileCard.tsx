import React from "react";
import { Card, Container, Row, Col, Badge, Table } from "react-bootstrap";
import {  FaUserCircle } from "react-icons/fa";

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
    <Container className="px-0">
      <Row className="d-flex justify-content-center">
        <Col lg={6} className="mb-4">
          <Card className="p-4 text-center shadow-sm common-radius">
            <div className="text-center">
              <FaUserCircle size={80} className="theme" />
              <h4 className="mt-2 fw-bold">{name}</h4>
              <p className="text-muted text-center">{role}</p>
            </div>

            <Row className="text-start mt-3">
              <Col>
                <h6 className="fw-bold">Personal Information</h6>
                <Table>
                  <tr>
                    <td className="left-icon"><i className="bi bi-person"/></td>
                    <td>{gender}</td>
                  </tr>
                  <tr>
                    <td><i className="bi bi-balloon"/></td>
                    <td>{age}</td>
                  </tr>
                </Table>
              </Col>
              <Col>
                <h6 className="fw-bold">Contact Information</h6><Table>
                  <tr>
                    <td className="left-icon"><i className="bi bi-telephone"/></td>
                    <td>{phone}</td>
                  </tr>
                  <tr>
                    <td><i className="bi bi-envelope"/></td>
                    <td>{email}</td>
                  </tr>
                </Table>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="p-4 shadow-sm common-radius">
            <h6 className="fw-bold">Skills</h6>
            <div className="d-flex flex-wrap gap-1 mb-3">
              {skills.map((skill) => (
                <Badge key={skill} bg="none" text="dark" className="border common-radius px-3 py-2 fw-light">
                  {skill}
                </Badge>
              ))}
            </div>

            <h6 className="fw-bold">Preferred Cities</h6>
            <div className="d-flex flex-wrap gap-1 ">
              {cities.map((city) => (
                <Badge key={city} bg="none" text="dark" className="border common-radius px-3 py-2 fw-light">
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
