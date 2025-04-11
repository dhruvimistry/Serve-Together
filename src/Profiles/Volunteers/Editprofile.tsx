import React, { useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import CustomButton from "../../components/common/CustomButton";
import AddProfileImage from "../../components/common/addprofileimage";

const EditProfile: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [preferredCities, setPreferredCities] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const handleAddItem = (
    input: string,
    setInput: (val: string) => void,
    list: string[],
    setList: (val: string[]) => void
  ) => {
    const newItem = input.trim();
    if (newItem) {
      setList([...list, newItem]);
      setInput("");
    }
  };

  const handleRemoveItem = (
    index: number,
    list: string[],
    setList: (val: string[]) => void
  ) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    input: string,
    setInput: (val: string) => void,
    list: string[],
    setList: (val: string[]) => void
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddItem(input, setInput, list, setList);
    }
  };
  

  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center mb-5">
      <Container className="bg-white shadow-sm p-5 common-radius w-100">
        <h3 className="fw-bold pt-3 pb-3">Edit Profile</h3>

        <Form className="mt-4">
          <AddProfileImage />

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control className="input-box" type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control className="input-box" type="email" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control className="input-box" type="number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control className="input-box" type="tel" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control className="input-box" type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mt-3">
            <Form.Label>Preferred Cities</Form.Label>
            <Form.Control
              className="input-box"
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={(e) =>
                handleKeyDown(e, cityInput, setCityInput, preferredCities, setPreferredCities)
              }
              placeholder="Type a city and press Enter"
            />
            <ListGroup horizontal className="mt-2">
              {preferredCities.map((city, index) => (
                <ListGroup.Item key={index}>
                  {city}
                  <i
                    className="bi bi-x ps-2 cursor-pointer"
                    onClick={() => handleRemoveItem(index, preferredCities, setPreferredCities)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              className="input-box"
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) =>
                handleKeyDown(e, skillInput, setSkillInput, skills, setSkills)
              }
              placeholder="Type a skill and press Enter"
            />
            <ListGroup horizontal className="mt-2">
              {skills.map((skill, index) => (
                <ListGroup.Item key={index}>
                  {skill}
                  <i
                    className="bi bi-x ps-2 cursor-pointer"
                    onClick={() => handleRemoveItem(index, skills, setSkills)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>

          <Container className="d-flex mt-4 justify-content-center align-items-center gap-4 py-3">
            <CustomButton variant="accept" label="Save" />
            <CustomButton variant="decline" label="Cancel" />
          </Container>
        </Form>
      </Container>
    </div>
  );
};

export default EditProfile;
