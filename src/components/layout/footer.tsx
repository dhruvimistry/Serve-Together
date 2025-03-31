import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadLogo from "../../assets/serve-together-1.png";
import './footer.css';
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-2 border-top bg-white">
      <div className="container">
        <img src={HeadLogo} alt="Serve Together" style={{ height: "50px" }} />
        
        {/* Navigation Links */}
        <nav className=" links mt-3 pt-3">
          <Link className="mx-2 link-text" to="/" >
            Home
          </Link>
          <Link className="mx-2 link-text" to="/about" >
            About Us
          </Link>
          <Link className="mx-2 link-text" to="/events" >
            Events
          </Link>
          <Link className="mx-2 link-text" to="/volunteers" >
            Volunteers
          </Link>
          <Link className="mx-2 link-text" to="/requests" >
            Requests
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-3">
          <a href="https://facebook.com" className="mx-2 text-dark"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" className="mx-2 text-dark"><i className="bi bi-instagram"></i></a>
          <a href="https://twitter.com" className="mx-2 text-dark"><i className="bi bi-twitter-x"></i></a>
        </div>
        <p className="mt-3 text-muted text-center">Copyright © Serve Together {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;