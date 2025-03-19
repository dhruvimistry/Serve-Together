import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
// import PasswordStrengthChecker from "../components/PasswordStrengthChecker";
import ImageSection from "../components/ImageSection";
import HeadLogo from "../assets/serve-together-1.png";

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://ngo-volunteer-2.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Login successful!");
  
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }
        navigate("/");
      } else {
        alert(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center vh-100 p-2">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75 logo" alt="Logo" />
        </div>
        <h4 className="text-center my-5" id="log-in">Log in</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="form-label mb-0">Email</label>
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailExp,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email?.message && <small className="text-danger">{String(errors.email.message)}</small>}
          </div>

          <div className="mb-4">
            <label className="form-label mb-0">Password</label>
            {/* <PasswordStrengthChecker password="" setPassword={() => {}} /> */}
            <input type="password" className="form-control input-box" {...register("password", { required: "Password is required" })} placeholder="Enter password" />
            {errors.password && <p className="text-danger small">{errors.password.message as String}</p>}
          </div>

          <button className="btn w-100 theme-bg my-4" type="submit">
            Log in
          </button>

          <div className="text-center small-text py-3">
            <a href="#" className="link-text">
              Forgot Password?
            </a>
          </div>

          <hr />

          <div className="text-center mt-3 small-text py-3">
            <span>
              Don't have an account? <Link to="/signup" className="link-text">Sign up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 flex-wrap">
      <ImageSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;