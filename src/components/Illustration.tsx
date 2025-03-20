import React from "react";
import Illustration from "../assets/Key-rafiki.png";

const ImageSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center">
        <img src={Illustration} alt="Illustration" className="max-w-full vh-100" />
      </div>
    </div>
  );
};

export default ImageSection;
