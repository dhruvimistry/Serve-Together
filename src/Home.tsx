import React from "react";
// import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
// import { isAuthenticated } from "./utils/authentication";
import NavBar from "./components/layout/Navbar";

const HomePage: React.FC = () => {

  return (
    <>
    <NavBar />
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1>Welcome to Serve Together</h1>
        <p className="lead">Connecting NGOs and volunteers to make a difference.</p>
      </div>
    </div>
    </>
  );
};

export default HomePage;