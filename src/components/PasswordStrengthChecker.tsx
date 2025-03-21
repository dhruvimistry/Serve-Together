import React, { useState } from "react";

interface PasswordStrengthCheckerProps {
  // password: string;
  setPassword: (password: string) => void;
  register: any;
  errors: any;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({ setPassword, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [strengthClass, setStrengthClass] = useState("text-muted");

  const checkPasswordStrength = (password: string) => {
    const length = password.length;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (length >= 12 && hasUpper && hasLower && hasDigit && hasSpecial) {
      return { text: "Excellent", class: "text-success" };
    } else if (length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
      return { text: "Strong", class: "text-primary" };
    } else if (length >= 6 && hasUpper && hasLower && hasDigit) {
      return { text: "Very Good", class: "text-info" }; 
    } else if (length >= 6 && hasUpper && hasLower) {
      return { text: "Good", class: "text-warning" };
    } else {
      return { text: "Weak", class: "text-danger" }; 
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = checkPasswordStrength(newPassword);
    setPasswordStrength(strength.text);
    setStrengthClass(strength.class);
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div>
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control input-box"
          placeholder="Enter your password"
          // value={password}
          // onChange={handlePasswordChange}
          // {...register("password", { required: "Password is required" })}
          {...register("password", { required: "Password is required" })}
          onChange={handlePasswordChange}
        />
        <span 
          // onClick={togglePasswordVisibility}
          onClick={() => setShowPassword(!showPassword)}
          className="input-group-text input-box" 
          style={{ cursor: "pointer" }}
        >
          <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`} />
        </span>
      </div>
      {passwordStrength && <small className={`mt-2 ${strengthClass}`}>{passwordStrength}</small>}
      {errors.password && <p className="text-danger small">{errors.password.message}</p>}
    </div>
  );
};

export default PasswordStrengthChecker;