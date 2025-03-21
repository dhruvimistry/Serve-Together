import React from "react";
import HeadLogo from "../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { FaUserCircle } from "react-icons/fa";

const NavBar: React.FC = () => {
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
              <a className="nav-link theme" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="#events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="#volunteers">Volunteers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link theme" href="#requests">Requests</a>
            </li>
            <a href="#" className="nav-link">
                <FaUserCircle size={24} className="text-primary" />
            </a>
          </ul>
          {/* <div className="d-flex gap-2 ms-3">
            <button className="btn theme-bg">Login</button>
            <button className="btn theme-bg">Sign Up</button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

{/* <Nav.Link href="#">
              <FaUserCircle size={24} className="text-primary" />
            </Nav.Link> */}