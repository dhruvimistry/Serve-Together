import React, { useState, useEffect } from "react";
import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
// import HeadLogo from "../assets/serve-together-1.png"; 
import "bootstrap/dist/css/bootstrap.min.css";
// import NavBar from "../components/Navbar";
// import Footer from "../components/footer";

const events = [
  {
    title: "Art & Creativity Workshop",
    location: "Hope Foundation Center",
    date: "30th March 2025",
    time: "11:00 AM - 3:00 PM",
    details: "Painting, Crafting, Creativity",
  },
  {
    title: "Gardening Workshop",
    location: "Hope Foundation Center",
    date: "30th March 2025",
    time: "11:00 AM - 3:00 PM",
    details: "Gardening, Crafting, Creativity",
  },
  {
    title: "Music & Dance Therapy",
    location: "Hope Foundation Center",
    date: "11th April 2025",
    time: "4:00 PM - 7:00 PM",
    details: "Singing, Dancing, Instrumental Skills",
  },
  {
    title: "Sports for All",
    location: "Hope Foundation Center",
    date: "5th April 2025",
    time: "4:00 PM - 7:00 PM",
    details: "Coaching, Motivation, Teamwork",
  },
];

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
    <>
      <div className="container mt-4">
      <div className="card p-3 common-radius">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Profile</h3>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>

        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div id="left-card" className="card p-4 shadow-sm common-radius" style={{ minHeight: cardHeight }}>
              <div className="text-center">
                <FaUserCircle size={80} className="text-secondary" />
                <h4 className="mt-2">Hope Foundation</h4>
                <p className="text-muted">NGO</p>
              </div>
              <h6 className="fw-bold">Address</h6>
              <p>
                <FaMapMarkerAlt className="me-2" /> Shanti Nagar, Near Patel Chowk, Ahmedabad, Gujarat - 380015
              </p>
              <h6 className="fw-bold">Contact Information</h6>
              <p>
                <FaPhoneAlt className="me-2" /> +91 98765 43210
              </p>
              <p>
                <FaEnvelope className="me-2" /> someone@mail.com
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div id="right-card" className="card p-4 shadow-sm border-0 common-radius" style={{ minHeight: cardHeight }}>
              <h6 className="fw-bold">About</h6>
              <p>
                Hope Foundation is a nonprofit organization committed to transforming the lives of
                underprivileged children, especially orphans. We provide education, healthcare, and
                essential resources to ensure a brighter future. Through community support and volunteer
                efforts, we strive to create a world where every child feels safe, nurtured, and empowered.
              </p>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="card p-3 common-radius">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Events</h3>
          <button className="btn btn-primary">Add + </button>
        </div>
      </div>

          <div className="row mt-3">
            {events.map((event, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card p-4 shadow-sm  common-radius">
                  <h5 className="fw-bold">{event.title}</h5>
                  <p>
                    <FaMapMarkerAlt className="me-2" /> {event.location}
                  </p>
                  <p>
                    <FaCalendarAlt className="me-2" /> {event.date} | {event.time}
                  </p>
                  <p>🔹 {event.details}</p>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* <Footer /> */}

    </>
  );
};

export default Profile;
