import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import HeadLogo from "../../assets/serve-together-1.png";
import IllustrationSection from "../../components/IllustrationSection";
import "../LoginPage.css";

const emailExp: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState<string | null>(null);

  interface ForgotPasswordFormData {
    email: string;
  }
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = async (data: { email: string }) => {
    setLoading(true); 
    setMessage(null); 

    try {
      const response = await fetch("https://ngo-volunteer-2.onrender.com/otp/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }), 
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("OTP sent successfully! Redirecting...");
        setTimeout(() => navigate("/verify-otp", { state: { email: data.email } }), 1500);
      } else {
        setMessage(result.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-12 d-flex align-items-center justify-content-center vh-100 p-2">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75 logo mb-3" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-3">Forgot Password?</h4>
        <p className="text-center my-4">Enter the email associated with your account</p>
        
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
            {errors.email?.message && <small className="text-danger">{String(errors.email.message)}</small>} {/* Show validation error */}
          </div>

          <button className="btn w-100 theme-bg my-4" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>

        {message && <p className="text-center mt-2 text-danger">{message}</p>} {/* Show success/error message */}

        <div className="text-center small-text py-3">
          <span className="link-text" onClick={() => navigate("/login")}>
            Back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 flex-wrap">
      <IllustrationSection />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
