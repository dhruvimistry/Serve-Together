import React from "react";
import CustomButton from "./CustomButton";

interface EventCardProps {
  title: string;
  nameOfOrganization: string;
  location: string;
  date: string;
  time: string;
  skills: string;
}

const EventCard: React.FC<EventCardProps> = ({ nameOfOrganization, title, location, date, time, skills }) => {
  return (
    <div className="card mb-3 shadow-sm common-bg common-radius border-0 my-2 px-0">
      <div className="card-body p-4">
        <h5 className="card-title">{ nameOfOrganization }</h5>
        <p className="card-text ">
        <table className="mb-0">
          <tr>
            <td><i className="bi bi-megaphone"/></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td className="left-icon"><i className="bi bi-geo-alt"/></td>
            <td>{location}</td>
          </tr>
          <tr>
            <td><i className="bi bi-calendar"/></td>
            <td>{date} | {time}</td>
          </tr>
          <tr>
            <td><i className="bi bi-star"/></td>
            <td>{skills}</td>
          </tr>
        </table>
        </p>
        <div className="d-flex justify-content-center gap-3">
          <CustomButton label="Apply" variant="primary" width="w-50"/>
        </div>
      </div>
   </div>
  );
};


export default EventCard;
