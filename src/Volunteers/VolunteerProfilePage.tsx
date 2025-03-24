"use client";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import NavBar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/footer";

const VolunteerProfilePage: React.FC = () => {
  return (
    <>
      <NavBar />

      {/* Profile Header */}
      <Container className="pro bg-white common-radius p-3 d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Profile</h3>
        <Button variant="primary">
          <FaEdit className="me-2 text-white" /> Edit
        </Button>
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

      <Footer />
    </>
  );
};

export default VolunteerProfilePage;
