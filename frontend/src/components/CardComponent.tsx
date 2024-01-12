import React from "react";
import { Card } from "react-bootstrap";
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
    <Card className={image ? "text-white" : ""}>
      {image && (
        <Card.Img
          className="card-img"
          src={image}
          alt={alt}
          style={{ objectFit: "cover" }}
        />
      )}
      <Card.ImgOverlay>
        <Card.Title className={`text-center ${image ? "card-title" : "p-2"}`}>
          {title}
        </Card.Title>
        <Card.Text
          className={`text-center ${
            image ? "card-text" : "mb-4 p-2 card-text"
          }`}
        >
          {text}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
