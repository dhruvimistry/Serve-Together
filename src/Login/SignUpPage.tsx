import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import HeadLogo from '../assets/serve-together-1.png';
import VolunteerForm from '../components/forms/VolunteerForm';
import OrganizationForm from '../components/forms/OrganizationForm';
import { setUserData } from '../utils/cookies';

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState("volunteer");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const roleParam = queryParams.get("role");

    if (roleParam === "volunteer" || roleParam === "organization") {
      setRole(roleParam);
    }
  }, [location.search]);

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
  
    const filteredData = role === "volunteer" 
      ? {
          name: data.name,
          email: data.email,
          mobileNo: data.mobileNo,
          password: data.password,
          age: Number(data.age),
          gender: data.gender,
          city: data.city,
        }
      : {
          nameOfOrganization: data.nameOfOrganization,
          email: data.email,
          mobileNo: data.mobileNo,
          password: data.password,
          city: data.city,
        };
  
    const url = role === "volunteer"
      ? "https://ngo-volunteer-2.onrender.com/volunteer/signup"
      : "https://ngo-volunteer-2.onrender.com/ngo/signup";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      });
  
      const result = await response.json();
      if (response.ok) {
        setUserData(filteredData);
        alert("Signup successful! Redirecting...");
        console.log("API Response:", result);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(result.message || "Signup failed. Try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
    console.log(filteredData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 mx-auto my-3">
      <div className="card shadow p-5 w-100 common-radius m-auto">
        <div className="text-center"> 
          <img src={HeadLogo} className="mb-3 logo" alt="Logo"/>
        </div>
        <h4 className="text-center mb-4">Sign Up</h4>

        <div className="d-flex justify-content-center mb-3">
          <select className="form-select w-auto theme fw-bold role-select" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="volunteer">Volunteer</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {role === "volunteer" ? (
            <VolunteerForm register={register} errors={errors} password={password} setPassword={setPassword} />
          ) : (
            <OrganizationForm register={register} errors={errors} password={password} setPassword={setPassword} />
          )}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn theme-bg my-3 create-btn" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>

        <div className="text-center small-text">
          <span>Already have an account? <Link to="/login" className="link-text">Log in</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;