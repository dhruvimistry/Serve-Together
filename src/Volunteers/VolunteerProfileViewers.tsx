import React from "react";
import { Container, Button } from "react-bootstrap";
import ProfileCard from "../components/ProfileCard";

const VolunteerProfileViewers: React.FC = () => {
  return (
    <>
      
      <Container className="pro bg-white common-radius p-3 d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Profile</h3>
        <Button variant="primary">Invite</Button>
      </Container>

      {/* Profile Section */}
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

    </>
  );
};

export default VolunteerProfileViewers;
