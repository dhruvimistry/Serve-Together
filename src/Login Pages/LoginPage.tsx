import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import PasswordStrengthChecker from "../components/PasswordStrengthChecker";
import ImageSection from "../components/ImageSection";
import HeadLogo from "../assets/serve-together-1.png";

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data: any) => {
    alert("Login successful!");
    console.log("Form Data:", data);
  };

  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" alt="Logo" />
        </div>
        <h4 className="text-center my-5">Log in</h4>

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
    <div className="container-fluid d-flex p-0 vh-100">
      <ImageSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;