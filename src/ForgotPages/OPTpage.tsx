import React, { useState } from "react";
import IllustationSection from "../components/IllustrationSection";
import HeadLogo from "../assets/serve-together-1.png";

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="col-md-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-50" alt="Serve Together" />
        </div>
        <h4 className="text-center my-4">Verify</h4>
        <p className="text-center">Enter the OTP sent to your email</p>
        <form>
          <div className="d-flex justify-content-center mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="form-control text-center mx-1"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                style={{ width: "40px" }}
              />
            ))}
          </div>
          <button className="btn w-100 theme-bg">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

const OTPPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 vh-100">
      <IllustationSection />
      <OTPForm />
    </div>
  );
};

export default OTPPage;
