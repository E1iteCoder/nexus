import React from "react";
import logo from "../assets/logo.png";      // ← import it!
import "../styles/auth.css";

type Props = {
  onFormSwitch: (formName: string) => void;
};

export default function Register({ onFormSwitch }: Props): JSX.Element {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <img
            className="auth-logo"
            src={logo}
            alt="Nexus logo"
          />
        <h2 className="auth-title">Create your account</h2>
        <form className="auth-form">
          <div>
            <label className="auth-label" htmlFor="email">Email address</label>
            <input type="email" id="email" className="auth-input" placeholder="name@example.com" />
          </div>
          <div>
            <label className="auth-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="auth-input" placeholder="********" />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <button className="auth-link-button" onClick={() => onFormSwitch("signin")}>
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
}
