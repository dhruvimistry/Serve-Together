import React from "react";
import ImageSection from "../components/ImageSection1";
import HeadLogo from "../assets/serve-together-1.png";

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-5">Forgot Password?</h4>
        <p className="text-center">Enter the email associated with your account</p>
        <form>
          <div className="mb-4">
            <label className="form-label mb-0">Email</label>
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn w-100 theme-bg my-4">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 vh-100">
      <ImageSection />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
