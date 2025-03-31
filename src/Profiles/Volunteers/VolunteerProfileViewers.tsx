"use client";
import React from "react";
import { Container, Button } from "react-bootstrap";
import ProfileCard from "../../components/common/ProfileCard"; 

const VolunteerProfilePage: React.FC = () => {
  return (
    <Container  className=" min-vh-100  ">
      <Container className="bg-white py-1 px-4 common-radius d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Profile</h3>
        <Button variant="primary">Invite</Button>
      </Container>

      <Container className="mt-4 px-0">
        <ProfileCard
          name="Alice Jane"
          role="Volunteer"
          gender="She/Her"
          age="21"
          phone="+91 98765 43210"
          email="someone@mail.com"
          skills={["Art", "Teaching", "Dancing", "Nutrition Guidance"]}
          cities={["Surat", "Navsari"]}
        />
      </Container>
    </Container>
  );
};

export default VolunteerProfilePage;
