import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./changePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordMismatch("");
    if (newPassword !== confirmNewPassword) {
      setPasswordMismatch("New passwords do not match");
      return;
    }
  };

  return (
    <div className={`container_change  ? "change-mode" : ""}`}>
      <div className="change-container">
        <div className="change-change">
          <form action="#" className="change-form" onSubmit={handleSubmit}>
            <h2 className="title">Change Password</h2>
            {passwordMismatch && (
              <div className="error">{passwordMismatch}</div>
            )}
            <div className="change-input-field">
              <FaLock className="icons" />
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="change-input-field">
              <FaLock className="icons" />
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="change-input-field">
              <FaLock className="icons" />
              <input
                type={showConfirmNewPassword ? "text" : "password"}
                name="confirmNewPassword"
                placeholder="Confirm Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
              >
                {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input
              type="submit"
              className="change-btn"
              value="Change Password"
            />
          </form>
        </div>
      </div>
      <div className="change-panels-container">
        <div className="panel-change left-change-panel">
          <div className="change-content">
            <h3>Ready to Change Your Password?</h3>
            <p>
              Stay ahead of potential security risks by updating your password
              regularly. Protect your account with a strong, updated password.
            </p>
          </div>
          <img src="src/assets/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
