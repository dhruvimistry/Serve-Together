import React, { useState } from "react";

interface PasswordCheckerProps {
  password: string;
  onStrengthChange: (strength: string) => void;
}

const checkPasswordStrength = (password: string) => {
  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (length >= 12 && hasUpper && hasLower && hasDigit && hasSpecial) {
    return { text: "Excellent", class: "excellent" };
  } else if (length >= 10 && hasUpper && hasLower && hasDigit && hasSpecial) {
    return { text: "Strong", class: "strong" };
  } else if (length >= 8 && hasUpper && hasLower && hasDigit) {
    return { text: "Very Good", class: "very-good" };
  } else if (length >= 8 && hasUpper && hasLower) {
    return { text: "Good", class: "good" };
  } else {
    return { text: "Weak", class: "weak" };
  } 
};

const PasswordStrengthChecker: React.FC<PasswordCheckerProps> = ({ password, onStrengthChange }) => {
  const [strength, setStrength] = useState("");

  React.useEffect(() =>{
    const result = checkPasswordStrength(password);
    setStrength(result.text);
  }, [password, onStrengthChange]);

  return (
    <small className={`text-${strength.toLowerCase}`}>
      {password ? strength : ""}
    </small>
  );
};

export default PasswordStrengthChecker;