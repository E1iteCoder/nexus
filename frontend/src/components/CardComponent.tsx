import React from "react";
import "../styles/Card.css";

interface Props {
  title: string;
  text: string;
  image?: string;
  alt?: string;
}

export default function CardComponent({
  title,
  text,
  image,
  alt,
}: Props): JSX.Element {
  return (
    <div className={`custom-card ${image ? "has-image" : ""}`}>
      {image && <img src={image} alt={alt} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="text-wrapper">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
