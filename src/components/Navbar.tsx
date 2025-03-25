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
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={HeadLogo} width="200" alt="ServeTogether Logo" />
        </Link>

        {/* Navbar Toggler */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link theme" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link theme" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link theme" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link theme" to="/volunteers">Volunteers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link theme" to="/requests">Requests</Link>
            </li>

            {/* Authentication Links */}
            {isAuthenticated() ? (
              <li className="nav-item dropdown">
                <FaUserCircle
                  size={30}
                  className="text-primary dropdown-toggle"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                />
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li>
                    <Link className="dropdown-item" to="/ngo-profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <p className="dropdown-item" onClick={handleLogout} style={{ cursor: "pointer" }}>
                      Logout
                    </p>
                  </li>
                </ul>
              </li>
            ) : (
              <div className="d-flex gap-2 ms-3">
                <Link to="/login" className="btn theme-bg">Login</Link>
                <Link to="/signup" className="btn theme-bg">Sign Up</Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
