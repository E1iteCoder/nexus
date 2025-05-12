import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import SocialMediaNetwork from "./SocialMedia";

export default function Footer(): JSX.Element {
  return (
    <>
      <SocialMediaNetwork />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h6 className="footer-title">NexusRead</h6>
            <p>
              NexusRead is a startup company that focuses on elevated reading,
              where people can mainstream their imagination as creators.
            </p>
          </div>

          <div className="footer-column">
            <h6 className="footer-title">Navigation</h6>
            <ul className="footer-links">
              <li><NavLink to="/home" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/library" className="footer-link">Library</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/create" className="footer-link">Create</NavLink></li>
              <li><NavLink to="/login" className="footer-link">Log in</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-title">Contact</h6>
            <p>Pflugerville, TX 78660, US</p>
            <p>nexusread1@gmail.com</p>
            <p>+1 512 587 0501</p>
          </div>
        </div>
      </footer>
    </>
  );
}
