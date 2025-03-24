import React from "react";
import Illustration from "../../components/IllustrationSection";
import HeadLogo from "../../assets/serve-together-1.png";

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="input-box col-xl-4 col-lg-5 col-md-12 d-flex align-items-center justify-content-center vh-100">
      <div className="p-1 w-75">
        <div className="text-center">
          <img src={HeadLogo} className="w-75" alt="Serve Together Logo" />
        </div>
        <h4 className="text-center my-5">Reset Password</h4>
        <form>
          <div className="mb-4">
            <label className="form-label mb-0">New Password</label>
            <input
              type="password"
              className="form-control input-box"
            />
          </div>
          <div className="mb-4">
            <label className="form-label mb-0">Confirm Password</label>
            <input
              type="password"
              className="form-control input-box"
            />
          </div>
          <button className="btn w-100 theme-bg my-4">Reset Password</button>
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
