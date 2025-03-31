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
        <p className="card-text">
          <span role="img" aria-label="event">⭐</span> {title} <br />
          <span role="img" aria-label="location">📍</span> {location} <br />
          <span role="img" aria-label="calendar">📅</span> {date} |
          <span role="img" aria-label="clock">⏰</span> {time} <br />
          <span role="img" aria-label="skills">🎯</span> {skills}
        </p>
        <div className="d-flex justify-content-center gap-3">
          <CustomButton label="Apply" variant="primary" width="w-50"/>
        </div>
      </div>
    </div>
  );
};


export default EventCard;
