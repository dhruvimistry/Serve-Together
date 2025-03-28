import React from "react";
import CustomButton from "./CustomButton";

interface VolunteerCardProps {
  name: string;
  skills: string;
  cities: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ name, skills, cities }) => {
  return (
    <div className="card mb-3 common-bg common-radius border-0 my-2 px-0">
      <div className="card-body p-4">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span role="img" aria-label="skills">🎯</span> {skills} <br />
          <span role="img" aria-label="location">📍</span> {cities}
        </p>
        <div className="d-flex justify-content-between gap-3">
          <CustomButton label="View Profile" variant="primary"/>
          <CustomButton label="Invite" variant="accept" />
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
