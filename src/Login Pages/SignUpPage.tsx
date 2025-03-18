import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './SignUpPage.css';
import HeadLogo from '../assets/serve-together-1.png';

interface FormProps {
  register: any;
  errors: any;
}

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const VolunteerForm: React.FC<FormProps> = ({ register, errors }) => (
  <>
    <div className="row pb-1">
      <div className="col-md-6 mb-3">
        <label>Name</label>
        <input type="text" className="form-control" {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
        {errors.name && <p className="text-danger small">{errors.name.message}</p>}
      </div>

      <div className="col-md-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control" {...register("mobile", { required: "Mobile number is required" })} placeholder="Enter mobile number" />
        {errors.mobile && <p className="text-danger small">{errors.mobile.message}</p>}
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-md-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control" {...register("email", { 
          required: "Email is required", 
          pattern: { 
            value: emailExp, 
            message: "Invalid email format" 
          }
          })} placeholder="Enter email" />
        {errors.email && <p className="text-danger small">{errors.email.message}</p>}
      </div>

      <div className="col-md-6 mb-3">
        <label>Password</label>
        <input type="password" className="form-control" {...register("password", { required: "Password is required" })} placeholder="Enter password" />
        {errors.password && <p className="text-danger small">{errors.password.message}</p>}
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-md-4 mb-3">
        <label>Age</label>
        <input type="number" className="form-control" {...register("age", { required: "Age is required", min: { value: 18, message: "Must be at least 18" } })} placeholder="Enter age" />
        {errors.age && <p className="text-danger small">{errors.age.message}</p>}
      </div>

      <div className="col-md-4 mb-3">
        <label>Gender</label>
        <select className="form-select" {...register("gender", { required: "Gender is required" })}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="text-danger small">{errors.gender.message}</p>}
      </div>

      <div className="col-md-4 mb-3">
        <label>City</label>
        <select className="form-select" {...register("city", { required: "City is required" })}>
          <option value="">Select city</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
        {errors.city && <p className="text-danger small">{errors.city.message}</p>}
      </div>
    </div>
  </>
);

const OrganizationForm: React.FC<FormProps> = ({ register, errors }) => (
  <>
    <div className="row pb-1">
      <div className="col-md-6 mb-3">
        
        <label>Name of Organization</label>
        <input type="text" className="form-control" {...register("orgName", { required: "Organization name is required" })} placeholder="Enter organization name" />
        {errors.orgName && <p className="text-danger small">{errors.orgName.message}</p>}
      </div>

      <div className="col-md-6 mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control" {...register("orgMobile", { required: "Mobile number is required" })} placeholder="Enter mobile number" />
        {errors.orgMobile && <p className="text-danger small">{errors.orgMobile.message}</p>}
      </div>
    </div>

    <div className="row pb-1">
      <div className="col-md-6 mb-3">
        <label>Email</label>
        <input type="email" className="form-control" {...register("email", { required: "Email is required" })} placeholder="Enter email" />
        {errors.email && <p className="text-danger small">{errors.email.message}</p>}
      </div>

      <div className="col-md-6 mb-3">
        {/* <label>Password</label>
        <input type="password" className="form-control" {...register("password", { required: "Password is required" })} placeholder="Enter password" />
        {errors.password && <p className="text-danger small">{errors.password.message}</p>} */}
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 offset-3 mb-3">
        <label>City</label>
        <select className="form-select" {...register("city", { required: "City is required" })}>
          <option value="">Select city</option>
          <option value="city1">City 1</option>
          <option value="city2">City 2</option>
        </select>
        {errors.city && <p className="text-danger small">{errors.city.message}</p>}
      </div>
    </div>
  </>
);

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState("volunteer");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /** The useForm Hook is used HERE */ 

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5 w-100 common-radius">
        <div className="text-center"> 
          <img src={HeadLogo} className="mb-3 logo" alt="Logo"/>
        </div>
        <h4 className="text-center mb-4">Sign Up</h4>
        
        <div className="d-flex justify-content-center mb-3">
          <select className="form-select w-auto theme fw-bold" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="volunteer">Volunteer</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {role === "volunteer" ? <VolunteerForm register={register} errors={errors} /> : <OrganizationForm register={register} errors={errors} />}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn theme-bg my-3 create-btn">Create Account</button>
          </div>
        </form>

        <div className="text-center small-text">
          <span>
            Already have an account? <Link to="/login" className="link-text">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;