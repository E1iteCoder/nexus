import React from "react";
import "../styles/Introduction.css";

export default function Introduction(): JSX.Element {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <h2>Introduction</h2>
        </div>
        <div className="intro-content">
          <p className="intro-lead">
            Welcome to NexusRead, where we strive to take your reading
            experience to new heights. Our platform offers a unique way to
            explore the imaginations and creations of writers and artists from
            all over the world, through a variety of mediums and formats.
          </p>
          <p>
            Whether you're looking to discover new authors to connect with or genres or just
            want to enjoy your favourite stories, NexusRead has got you covered. Join us 
            today and embark on a journey of endless possibilities.
          </p>
        </div>
      </div>
    </section>
  );
}
