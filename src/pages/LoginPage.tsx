import React, { useState } from "react";
import PasswordStrengthChecker from "../components/PasswordStrengthChecker";
import ImageSection from "../components/ImageSection";
import HeadLogo from "../assets/serve-together-1.png";
// import { Link } from "react-router";

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value === "" || !emailExp.test(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailExp.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    alert("Login successful!"); 
  };

  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" alt="Logo" />
        </div>
        <h4 className="text-center my-5">Log in</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label mb-0">Email</label>
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <small className="text-danger">{emailError}</small>}
          </div>

          <div className="mb-4">
            <label className="form-label mb-0">Password</label>
            <PasswordStrengthChecker password={password} setPassword={setPassword} />
          </div>


          <button className="btn w-100 theme-bg my-4" type="submit">
            Log in
          </button>

          <div className="text-center small-text py-3">
            <a href="#" className="link-text fw-bold">
              Forgot Password?
            </a>
          </div>

          <hr />

          <div className="text-center mt-3 fw-bold small-text py-3">
            <span>
              Don't have an account? 
              <a href="#" className="link-text">Sign up  </a>
              {/* <Link to="/src/pages/SignUpPage.tsx"className="link-text">Sign up</Link> */}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 vh-100">
      <ImageSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;