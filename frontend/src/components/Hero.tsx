import React from "react";
import "../styles/Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  altText,
}: HeroProps): JSX.Element {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="landing-header">{title}</h1>
          <h1 className="landing-header2">{subtitle}</h1>
        </div>
        <div className="hero-image">
          <img src={imageSrc} alt={altText} className="landing-logo" />
        </div>
      </div>
    </div>
  );
}
