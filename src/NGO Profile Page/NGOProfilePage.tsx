import React from "react";
import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import HeadLogo from "../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      
      {/* Profile Section */}
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold">Profile</h3>
          <button className="btn btn-primary">Edit</button>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <div className="card p-4 shadow-sm border-0 common-radius">
              <div className="text-center">
                <FaUserCircle size={80} className="text-secondary" />
                <h4 className="mt-2">Hope Foundation</h4>
                <p className="text-muted">NGO</p>
              </div>
              <h6 className="fw-bold">Address</h6>
              <p><FaMapMarkerAlt className="me-2" /> Shanti Nagar, Near Patel Chowk, Ahmedabad, Gujarat - 380015</p>
              <h6 className="fw-bold">Contact Information</h6>
              <p><FaPhoneAlt className="me-2" /> +91 98765 43210</p>
              <p><FaEnvelope className="me-2" /> someone@mail.com</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card p-4 shadow-sm border-0 common-radius">
              <h6 className="fw-bold">About</h6>
              <p>Hope Foundation is a nonprofit organization committed to transforming the lives of
                underprivileged children, especially orphans. We provide education, healthcare, and
                essential resources to ensure a brighter future. Through community support and volunteer
                efforts, we strive to create a world where every child feels safe, nurtured, and empowered.</p>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h3 className="fw-bold">Events</h3>
          <button className="btn btn-primary">Add</button>
        </div>

        <div className="row mt-3">
          {["Art & Creativity Workshop", "Gardening Workshop", "Music & Dance Training", "Speech for All"].map((event, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <div className="card p-4 shadow-sm border-0 common-radius">
                <h6 className="fw-bold">{event}</h6>
                <p><FaCalendarAlt className="me-2" /> 19th March 2025 | 3:00 PM</p>
                <p>Workshop, Creativity</p>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-light mt-4">
        <img src={HeadLogo} alt="Serve Together" height="40" className="mb-2" />
        <ul className="nav justify-content-center">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Volunteers</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Requests</a></li>
        </ul>
        <p className="text-muted mt-2">@Copyright Serve Together 2025</p>
      </footer>
    </>
  );
};

export default App;
