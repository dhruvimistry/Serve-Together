import React from "react";
import ImageSection from "../components/ImageSection";
import HeadLogo from "../assets/serve-together-1.png"

//Validation is left
const LoginForm: React.FC = () => {
  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" />
        </div>
        <h4 className="text-center my-5">Log in</h4>
        <form>
          <div className="mb-4">
            <label className="form-label mb-0">Email</label>
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="form-label mb-0">Password</label>
            <input
              type="password"
              className="form-control input-box"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn w-100 theme-bg my-4">Log in</button>
          <div className="text-center small-text py-3">
            <a href="#" className="link-text fw-bold">Forgot Password?</a>
          </div>
          <hr/>
          <div className="text-center mt-3 fw-bold small-text py-3">
            <span>
              Don't have an account? <a href="#" className="link-text">Sign up</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginPage: React.FC= () => {
  return (
    <div className="container-fluid d-flex p-0 vh-100">
      <ImageSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
