import React from "react";
import "./CustomButton.css";

interface ButtonProps {
  label: string;
  variant?: "accept" | "decline" | "primary" | "dark";
  //use accept for btn with light-blue bg and decline for light-red bg, primary is the common blue btn we have
  width?: string; 
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, variant = "primary", width, onClick}) => {
  return (
    <button className={`btn ${variant} ${width}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
