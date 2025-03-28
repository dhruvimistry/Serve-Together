import React, { useState, useEffect } from "react";
import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { events } from "../../utils/EventsData";

const Profile: React.FC = () => {
  const [cardHeight, setCardHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      const leftCard = document.getElementById("left-card");
      const rightCard = document.getElementById("right-card");
      if (leftCard && rightCard) {
        const maxHeight = Math.max(leftCard.clientHeight, rightCard.clientHeight);
        setCardHeight(`${maxHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="container mt-4">
      <div className="card py-1 px-4  common-radius">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Profile</h3>
      </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 mb-3">
          <div id="left-card" className="card p-4 shadow-sm border-0 common-radius" style={{ minHeight: cardHeight }}>
            <div className="text-center">
              <FaUserCircle size={80} className="text-secondary" />
              <h4 className="mt-2">Hope Foundation</h4>
              <p className="text-muted">NGO</p>
            </div>
            <h6 className="fw-bold">Address</h6>
            <p><FaMapMarkerAlt className="me-2" /> Shanti Nagar, Ahmedabad, Gujarat - 380015</p>
            <h6 className="fw-bold">Contact Information</h6>
            <p><FaPhoneAlt className="me-2" /> +91 98765 43210</p>
            <p><FaEnvelope className="me-2" /> someone@mail.com</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div id="right-card" className="card p-4 shadow-sm border-0 common-radius" style={{ minHeight: cardHeight }}>
            <h6 className="fw-bold">About</h6>
            <p>
              Hope Foundation is a nonprofit organization committed to transforming the lives of underprivileged children.
              We provide education, healthcare, and essential resources to ensure a brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="mt-4">
      <div className="card py-1 px-4  common-radius">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Events</h3>
        </div>
        </div>

        <div className="row mt-3">
          {events.map((event, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="card p-4 shadow-sm common-radius">
                <h5 className="fw-bold">{event.title}</h5>
                <p><FaMapMarkerAlt className="me-2" /> {event.location}</p>
                <p><FaCalendarAlt className="me-2" /> {event.date} | {event.time}</p>
                <p>🔹 {event.details}</p>
                <button className="btn theme-bg">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
