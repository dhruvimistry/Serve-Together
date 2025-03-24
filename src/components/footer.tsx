import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadLogo from "../assets/serve-together-1.png";
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-2 mt-4 border-top" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <img src={HeadLogo} alt="Serve Together" style={{ height: "50px"  }} />
        <nav className="mt-3 pt-3">
          <a href="/" className="mx-2 text-primary text-decoration-none">Home</a>
          <a href="/about" className="mx-2 text-primary text-decoration-none">About Us</a>
          <a href="/events" className="mx-2 text-primary text-decoration-none">Events</a>
          <a href="/volunteers" className="mx-2 text-primary text-decoration-none">Volunteers</a>
          <a href="/requests" className="mx-2 text-primary text-decoration-none">Requests</a>
        </nav>
        <div className="mt-3">
          <a href="https://facebook.com" className="mx-2 text-dark"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" className="mx-2 text-dark"><i className="bi bi-instagram"></i></a>
          <a href="https://twitter.com" className="mx-2 text-dark"><i className="bi bi-twitter-x"></i></a>
        </div>
        <hr />
        <p className="mt-3 text-muted">Copyright © Serve Together {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;
