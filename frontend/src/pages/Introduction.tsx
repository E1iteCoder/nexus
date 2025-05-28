import React from "react";
import "../styles/Introduction.css";
import logoImg from "../assets/logo.png"; // or wherever your tree+text logo lives

export default function Introduction(): JSX.Element {
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* LEFT SIDE: text */}
        <div className="intro-text">
          <h2>Introduction</h2>
          <p className="intro-lead">
            Welcome to Nexus, where we strive to take your reading
            experience to new heights. Our platform offers a unique way to
            explore the imaginations and creations of writers and artists from
            all over the world, through a variety of mediums and formats.
          </p>
          <p>
            Whether you're looking to discover new authors to connect with or
            genres or just want to enjoy your favourite stories, Nexus has
            got you covered. Join us today and embark on a journey of endless
            possibilities.
          </p>
        </div>

        {/* RIGHT SIDE: logo + tagline */}
        <div className="intro-visual">
          <img src={logoImg} alt="Nexus logo" className="intro-logo" />
          <p className="intro-tagline">Reading elevated</p>
        </div>
      </div>
    </section>
  );
}
