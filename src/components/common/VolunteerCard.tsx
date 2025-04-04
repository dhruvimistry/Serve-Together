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
        <table>
          <tr>
            <td><i className="bi bi-star"/></td>
            <td>{skills}</td>
          </tr>
          <tr>
            <td className="left-icon"><i className="bi bi-geo-alt"/></td>
            <td>{cities}</td>
          </tr>
        </table>
        </p>
        <div className="d-flex justify-content-between gap-2">
          <CustomButton label="View Profile" variant="primary" width="w-50"/>
          <CustomButton label="Invite" variant="accept" width="w-50"/>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;

