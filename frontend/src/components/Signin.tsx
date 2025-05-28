import React from "react";
import logo from "../assets/logo.png";      // ← import it!
import "../styles/auth.css";

type Props = {
  onFormSwitch: (formName: string) => void;
};

export default function SignIn({ onFormSwitch}: Props): JSX.Element {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <img
            className="auth-logo"
            src={logo}
            alt="Nexus logo"
          />
        <h2 className="auth-title">Sign in to your account</h2>
        <form className="auth-form">
          <div>
            <label className="auth-label" htmlFor="email">Email address</label>
            <input type="email" id="email" className="auth-input" placeholder="name@example.com" />
          </div>
          <div>
            <label className="auth-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="auth-input" placeholder="********" />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
        <button className="auth-link-button" onClick={() => onFormSwitch("register")}>
          Don't have an account? Create one
        </button>
      </div>
    </div>
  );
}
