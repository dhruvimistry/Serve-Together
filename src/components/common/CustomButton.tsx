import React from "react";
import "./CustomButton.css"; 

interface ButtonProps {
  label: string;
  variant?: "accept" | "decline" | "primary"; 
  //use accept for accept and decline for decline, primary is the common blue btn we have
}

const CustomButton: React.FC<ButtonProps> = ({ label, variant = "primary" }) => {
  return (
    <button className={`btn ${variant}`}>
      {label}
    </button>
  );
};

export default CustomButton;