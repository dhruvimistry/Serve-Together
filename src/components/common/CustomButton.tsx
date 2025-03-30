import React from "react";
import "./CustomButton.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "danger" | "default"; // Added "default" for unselected event buttons
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
