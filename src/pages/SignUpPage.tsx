import React, { useState } from 'react';
import './SignUpPage.css';
import HeadLogo from '../assets/serve-together-1.png';

const VolunteerForm: React.FC = () => (
  <>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="col-md-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control" placeholder="Enter mobile number" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="col-md-6 mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mb-3">
        <label>Age</label>
        <input type="number" className="form-control" placeholder="Enter age" />
      </div>
      <div className="col-md-4 mb-3">
        <label>Gender</label>
        <select className="form-select">
          <option>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="col-md-4 mb-3">
        <label>City</label>
        <select className="form-select">
          <option>Select city</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </div>
    </div>
  </>
);

const OrganizationForm: React.FC = () => (
  <>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label>Name of Organization</label>
        <input type="text" className="form-control" placeholder="Enter organization name" />
      </div>
      <div className="col-md-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control" placeholder="Enter mobile number" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="col-md-6 mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 mb-3">
        <label>City</label>
        <select className="form-select">
          <option>Select city</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
      </div>
    </div>
  </>
);

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState("volunteer");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="mb-3 logo" alt="Logo"/>
        </div>
        <h4 className="text-center mb-4">Sign Up</h4>
        
        <div className="d-flex justify-content-center mb-3">
          <select className="form-select role-selection" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="volunteer">Volunteer</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        {role === "volunteer" ? <VolunteerForm /> : <OrganizationForm />}

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary my-3 create-btn">Create Account</button>
        </div>
        <div className="text-center">
          <span>
            Already have an account? <a href="#" className="text-primary">Log in</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;