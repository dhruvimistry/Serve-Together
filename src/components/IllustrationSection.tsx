import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ForgotPasswordIllustration from "../assets/Forgot password.gif";
import ResetPasswordIllustration from "../assets/Reset password.png";

const IllustrationSection: React.FC = () => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = location.pathname.includes("reset-password")
    ? ResetPasswordIllustration
    : ForgotPasswordIllustration;

  return (
    isDesktop && (
      <div className="col-xl-8 col-lg-7 vh-100 d-flex align-items-center justify-content-center bg-white">
        <div className="text-center">
          <img src={imageSrc} alt="Illustration" className="vh-100" />
        </div>
      </div>
    )
  );
};

export default IllustrationSection;
