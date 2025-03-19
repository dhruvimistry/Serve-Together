import React from "react";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Welcome to Serve Together</h1>
      <p className="lead">Connecting NGOs and volunteers to make a difference.</p>
      <div>
        <Link to="/login" className="link-text">Log in</Link><br />
        <Link to="/signup" className="link-text">Sign up</Link>
      </div>
    </div>
  );
};

export default HomePage;