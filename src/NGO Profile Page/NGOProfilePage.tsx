// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <a className="navbar-brand" href="#">SERVE TOGETHER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Volunteers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Requests</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 text-center">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle mx-auto"
                alt="profile"
              />
              <h5 className="mt-2">Hope Foundation</h5>
              <p>NGO</p>
              <p><strong>Address:</strong> Street 123, Hope Nest Church, Karnataka, 560016</p>
              <p><strong>Contact:</strong> +91-1234567890 | sample@email.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card p-3">
              <h5>About</h5>
              <p>
                Hope Foundation is a Nonprofit Organization committed to transforming the lives of underprivileged children. We provide education, healthcare, and skill development programs to empower young minds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h4>Events</h4>
        <div className="row">
          {["Art & Creativity Workshop", "Gardening Workshop", "Music & Dance Therapy", "Speech for All"].map((event, index) => (
            <div key={index} className="col-md-6 mt-3">
              <div className="card p-3">
                <h5>{event}</h5>
                <p><strong>Date:</strong> March 25, 2025 | <strong>Time:</strong> 2:00 PM</p>
                <p><strong>Location:</strong> Community Center</p>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-light text-center py-3 mt-4">
        <p>&copy; 2025 Serve Together</p>
      </footer>
    </div>
  );
};

export default App;
