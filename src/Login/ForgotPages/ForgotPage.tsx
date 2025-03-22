import React, { useState } from "react";
import IllustrationSection from "../../components/IllustrationSection";
import HeadLogo from "../../assets/serve-together-1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ForgotPages/OTPPage.css";

const ForgotPasswordForm: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center mb-4">
          <img src={HeadLogo} className="img-fluid w-50" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-3">{emailSent ? "Verify OTP" : "Forgot Password?"}</h4>
        <p className="text-center">
          {emailSent ? "Enter the OTP sent to your email" : "Enter the email associated with your account"}
        </p>
        <form>
          {!emailSent ? (
            <>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="input-box form-control" placeholder="Enter your email" />
              </div>
              <button className="btn btn-primary w-100" onClick={() => setEmailSent(true)}>Send OTP</button>
            </>
          ) : (
            <>
              <div className="otp-container">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    className="otp-input"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
              <button className="btn btn-primary w-100 mt-3" disabled={otp.includes("")}>
                Reset Password
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-md-row vh-100 p-0">
      <div className="d-none d-md-block col-md-8 col-lg-8">
        <IllustrationSection />
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
