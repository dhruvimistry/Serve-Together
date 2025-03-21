import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import { isAuthenticated, logoutUser } from "./utils/authentication";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Welcome to Serve Together</h1>
      <p className="lead">Connecting NGOs and volunteers to make a difference.</p>
      <div>

        {isAuthenticated() ? (
          
          <button onClick={handleLogout} className="btn btn-danger mt-3">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="link-text">Log in</Link><br />
            <Link to="/signup" className="link-text">Sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;