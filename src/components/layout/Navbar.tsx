import React from "react";
import HeadLogo from "../../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutUser } from "../../utils/authentication";
import "./Navbar.css"
import CustomButton from "../common/CustomButton";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg background px-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={HeadLogo} alt="ServeTogether Logo" style={{ height: "50px" }} />
          </Link>

          {/* Offcanvas Toggle*/}
          <div
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{border: "none"}}
          >
            <i className="bi bi-list"></i>
          </div>

          {/* Offcanvas Menu */}
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close"  aria-label="Close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" >
                  <Link className="nav-link link-text" to="/" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-text" to="/about" >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-text" to="/events" >
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-text" to="/volunteers" >
                    Volunteers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-text" to="/requests" >
                    Requests
                  </Link>
                </li>

                {/* Dropdown */}
                {isAuthenticated() ? (
                  <li className="nav-item dropdown profile-icon">
                    <i
                      className="bi bi-person-circle link-text" 
                      id="profileDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                      <li>
                        <Link className="dropdown-item" to="/ngo-profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="d-flex gap-2">
                    <CustomButton label="Log in" onClick={() => navigate('/login')}/>
                    <CustomButton label="Sign up" onClick={() => navigate('/signup')}/>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;