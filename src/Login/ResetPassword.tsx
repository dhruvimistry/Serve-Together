import React, { useEffect, useState } from "react";
import Illustration from "../components/IllustrationSection";
import HeadLogo from "../assets/serve-together-1.png";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { resetPassword } from "../services/resetPassword";
import PasswordStrengthChecker from "../components/PasswordStrengthChecker";

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();
  
  const [_, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password", { replace: true });
      window.history.pushState(null, "", "/forgot-password");
    }
  }, [email, navigate]);

  const newPassword = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data: any) => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const result = await resetPassword(email, data.password);

      if (result.statusCode === 200) {
        setMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => navigate("/login", { replace: true }), 2000);
      } else {
        setMessage(result.message || "Failed to reset password.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="input-box col-xl-4 col-lg-5 col-md-12 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-5">Reset Password</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="form-label mb-0">New Password</label>
            <PasswordStrengthChecker setPassword={setPassword} register={register} errors={errors} />
          </div>

          <div className="mb-4">
            <label className="form-label mb-0">Confirm Password</label>
            <input
              type="password"
              className="form-control input-box"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === newPassword || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message as string}</p>}
          </div>

          {message && <p className="text-center text-danger">{message}</p>}

          <button className="btn w-100 theme-bg my-4" type="submit" disabled={loading || newPassword !== confirmPassword}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

const ResetPage: React.FC = () => {
  return (
    <div className="container-fluid d-flex p-0 flex-wrap">
      <Illustration />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPage;
