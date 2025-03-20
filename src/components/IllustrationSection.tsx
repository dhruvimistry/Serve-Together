import React from "react";
import Illustration from "../assets/Forgot password gif.gif";

const ImageSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <img src={Illustration} alt="Forgot Password Illustration" className="max-w-full vh-100" />
      </div>
    </div>
  );
};

export default ImageSection;
