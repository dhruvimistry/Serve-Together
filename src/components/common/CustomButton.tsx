import React from "react";
import "./CustomButton.css"; 

interface ButtonProps {
  label: string;
  variant?: "accept" | "decline" | "primary";
  width?: string; 
  //use accept for btn with light-blue bg and decline for light-red bg, primary is the common blue btn we have
}

const CustomButton: React.FC<ButtonProps> = ({ label, variant = "primary", width}) => {
  return (
    <button className={`btn ${variant} ${width}`}>
      {label}
    </button>
  );
};

export default CustomButton;