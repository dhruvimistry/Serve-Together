import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IllustationSection from "../../components/IllustrationSection";
import HeadLogo from "../../assets/serve-together-1.png";
import { resendOTP, verifyOTP } from "../../services/verifyOtp";
import { useLocation, useNavigate } from "react-router-dom";

const OTPForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      navigate("/forgot-password");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const onSubmit = async () => {
    if (otp.some(digit => digit === "")) {
      setMessage("Please enter all OTP digits.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const result = await verifyOTP(email, otp.join(""));

      if (result.statusCode === 200) {
        setMessage("OTP Verified! Redirecting...");
        setTimeout(() => navigate("/reset-password", { state: { email }, replace: true }), 1500);
      } else {
        setMessage(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }

    setLoading(false);
  };

  const handleResendOTP = async () => {
    setMessage(null);
    setCanResend(false);
    setResendTimer(60);

    try {
      const result = await resendOTP(email);
      setMessage(result.success ? "New OTP sent successfully!" : result.message);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-12 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-50" alt="Serve Together" />
        </div>
        <h4 className="text-center my-4">Verify</h4>
        <p className="text-center">Enter the OTP sent to your email</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center mb-4">
            {otp.map((_, index) => (
              <input
              key={index}
              type="text"
              className={`input-box form-control text-center mx-1 ${errors[`otp_${index}`] ? 'border-danger' : ''}`}
              maxLength={1}
              value={otp[index]}
              {...register(`otp_${index}`, { 
                required: true, 
                pattern: /^\d$/ ,
                onChange: (e) => handleChange(index, e.target.value)
              })}
              // style={{ width: "40px" }}
            />
            
            ))}
          </div>
          {errors.otp_0 && <p className="text-danger text-center">OTP is required</p>}
          {message && <p className="text-center text-danger">{message}</p>}
          <button className="btn w-100 theme-bg" type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="text-center mt-3">
          <button 
            className="btn btn-link link-text p-0" 
            onClick={handleResendOTP} 
            disabled={!canResend}
          >
            {canResend ? "Resend OTP" : `Resend in ${resendTimer}s`}
          </button>
        </div>
      </div>
    </div>
  );
};

const OTPPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row vh-100 p-0"> 
      <IllustationSection />
      <OTPForm />
    </div>
  );
};

export default OTPPage;