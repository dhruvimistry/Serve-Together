import React from "react";
import CustomButton from "./CustomButton";
// import eventsData from "./events"; // Assuming eventsData is stored in events.ts

interface EventCardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  skills: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, date, time, skills }) => {
  return (
    <div className="card mb-3 common-bg common-radius border border-none my-2 px-0">
      <div className="card-body p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <span role="img" aria-label="location">📍</span> {location} <br />
          <span role="img" aria-label="calendar">📅</span> {date} <br />
          <span role="img" aria-label="clock">⏰</span> {time} <br />
          <span role="img" aria-label="skills">🎯</span> {skills}
        </p>
        <div className="d-flex justify-content-between gap-3">
          <CustomButton label="Apply" variant="primary" />
        </div>
      </div>
    </div>
  );
};


export default EventCard;
