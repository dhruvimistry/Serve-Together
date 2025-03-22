import React from "react";
import { useLocation } from "react-router-dom";
import ForgotPasswordIllustration from "../assets/Forgot password.gif";
import ResetPasswordIllustration from "../assets/Reset password.png";

const IllustrationSection: React.FC = () => {
  const location = useLocation();

  const imageSrc = location.pathname.includes("reset-password") 
    ? ResetPasswordIllustration
    : ForgotPasswordIllustration;

  return (
    <div className="d-none d-md-flex align-items-center justify-content-center vh-100 bg-white">
      <img 
        src={imageSrc} 
        alt="Illustration" 
        className="img-fluid" 
        style={{ maxHeight: "80vh", width: "auto" }} 
      />
    </div>
  );
};

export default IllustrationSection;

