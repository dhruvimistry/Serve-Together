import React from "react";
import IllustrationSection from "../components/IllustrationSection";
import HeadLogo from "../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-3 w-100">
        <div className="text-center mb-4">
          <img src={HeadLogo} className="img-fluid w-50" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-3">Forgot Password?</h4>
        <p className="text-center">Enter the email associated with your account</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn btn-primary w-100">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row vh-100 p-0">
      <div className="d-none d-md-block col-md-8 col-lg-8">
      <IllustrationSection />
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
