import React from "react";
import Illustration from "../assets/Key-rafiki.png";

const ImageSection: React.FC = () => {
  return (
    <div className="col-md-8 vh-100 d-flex justify-content-center align-items-center p-0 bg-light">
      <div className="text-center">
        <img src={Illustration} alt="Illustration" className="w-75" />
      </div>
    </div>
  );
};

export default ImageSection;
