"use client";
import React from "react";
import { Container } from "react-bootstrap";
// import { FaEdit } from "react-icons/fa";  
import ProfileCard from "../../components/common/ProfileCard"; 
import CustomButton from "../../components/common/CustomButton";

const VolunteerProfilePage: React.FC = () => {
  return (
    <Container className="min-vh-100">
      <Container className="bg-white  p-3 common-radius d-flex justify-content-between align-items-center">
        <h3 className="fw-bold m-0">Profile</h3>
        <CustomButton variant="accept" label="Edit">
          {/* <FaEdit className="me-2 text-white" />  */}
        </CustomButton>
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
