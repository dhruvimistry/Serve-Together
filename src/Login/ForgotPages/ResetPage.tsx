import React from "react";
import Illustration from "../../components/IllustrationSection";
import HeadLogo from "../../assets/serve-together-1.png";

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="input-box col-md-4 d-flex align-items-center justify-content-center vh-100">
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
    <div className="container-fluid d-flex flex-column flex-md-row vh-100 p-0">
      <div className="d-none d-md-block col-md-8 col-lg-8">
      <Illustration />
      </div>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPage;
