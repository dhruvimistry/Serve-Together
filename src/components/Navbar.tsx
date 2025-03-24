import React from "react";
import HeadLogo from "../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutUser } from "../utils/authentication";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg background">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={HeadLogo} width="200" alt="ServeTogether Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link theme" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="/events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="/volunteers">Volunteers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="/requests">Requests</a>
            </li>
            <div>
              {isAuthenticated() ? (
                <div className="dropdown">
                  {/* Clicking the profile icon opens the dropdown */}
                  <FaUserCircle 
                    size={30} 
                    className="text-primary dropdown-toggle" 
                    id="profileDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    style={{ cursor: "pointer" }} 
                  />
                  {/* Dropdown menu appears when clicking the profile icon */}
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                    <li>
                      <Link className="dropdown-item" to="/ngo-profile">Profile</Link>
                    </li>
                    <li>
                      <p 
                        className="dropdown-item" 
                        onClick={handleLogout} 
                        style={{ cursor: "pointer" }}
                      >
                        Logout
                      </p>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex gap-2 ms-3">
                  <Link to="/login" className="btn theme-bg">Login</Link>
                  <Link to="/signup" className="btn theme-bg">Sign Up</Link>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
