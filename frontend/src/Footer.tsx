import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import SocialMediaNetwork from "./SocialMedia";

export default function Footer(): JSX.Element {
  return (
    <>
      <SocialMediaNetwork />
      <section className="footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-sm col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                NexusRead
              </h6>
              <p>
                NexusRead is a startup company that focuses on elevated reading,
                where people can mainstream their imagination as creators
              </p>
            </div>
            <div className="col-sm col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/home" className="footer-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/library" className="footer-link">
                    Library
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="footer-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/create" className="footer-link">
                    Create
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="footer-link">
                    Log in
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Pflugerville, TX 78660, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                nexusread1@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 1 512 587 0501
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
