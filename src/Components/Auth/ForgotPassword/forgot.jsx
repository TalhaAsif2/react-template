import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container_forgot  ? "forgot-mode" : ""}`}>
      <div className="forgot-container">
        <div className="forgot-forgot">
          <form action="#" className="forgot-form" onSubmit={handleSubmit}>
            <h2 className="forgot-password-title">Forgot Password</h2>
            <div className="forgot-password-input-field">
              <FaEnvelope className="forgot-password-icons" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="forgot-password-btn"
              value="Reset Password"
            >
              Reset
            </button>
            <div className="back">
              <p>
                Back to<a href="/"> Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="forgot-panels-container">
        <div className="panel-forgot left-forgot-panel">
          <div className="forgot-content">
            <h3>Forgot Your Password?</h3>
            <p>
              No worries! We've got you covered. Reset your password to regain
              access to your account.
            </p>
          </div>
          <img src="src/assets/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
