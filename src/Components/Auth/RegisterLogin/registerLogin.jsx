import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";
import "./registerLogin.css";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setConfirmPasswordError("");
    if (password !== confirmPassword) {
      setConfirmPasswordError("Password do not match");
      return;
    }
    setIsSignUp(false);
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then((response) => {
        console.log("Signup success:", response.data);
      })
      .catch((error) => {
        console.error("Signup error:", error);
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .then((response) => {
        console.log("Signin Success:", response.data);
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.log("signin error:", error);
      });
  };

  return (
    <div className={`container_register ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={handleSignInSubmit}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-fields">
              <FaUser className="icons" />
              <input
                type="text"
                name="email"
                placeholder="Username/Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <FaLock className="icons" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="signup_password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="forgot">
              <a href="/forgot" className="forgot_password">
                Forgot Password?
              </a>
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF className="facebook-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter className="twitter-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle className="google-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn className="linkedin-icon" />
              </a>
            </div>
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={handleSignUpSubmit}
          >
            <h2 className="title">Sign up</h2>
            {confirmPasswordError && (
              <div className="error-signup">{confirmPasswordError}</div>
            )}
            <div className="input-fields">
              <FaUser className="icons" />
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <FaEnvelope className="icons" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-fields">
              <FaLock className="icons" />
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="signup_password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="input-fields">
              <FaLock className="icons" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm-Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                title={
                  confirmPasswordError
                    ? confirmPasswordError
                    : "Confirm password"
                }
              />

              <span
                className="signup_password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookF className="facebook-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter className="twitter-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaGoogle className="google-icon" />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn className="linkedin-icon" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lets make your experience memorable!</p>
            <button className="btn transparent" onClick={handleSignUpMode}>
              Sign up
            </button>
          </div>
          <img src="src/assets/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Welcome back! Dive back in and discover even more opportunities
              for growth and connection.
            </p>
            <button className="btn transparent" onClick={handleSignInMode}>
              Sign in
            </button>
          </div>
          <img src="src/assets/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
