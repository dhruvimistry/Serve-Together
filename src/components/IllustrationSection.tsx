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
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <img src={imageSrc} alt="Illustration" className="max-w-full vh-100" />
      </div>
    </div>
  );
};

export default IllustrationSection;
