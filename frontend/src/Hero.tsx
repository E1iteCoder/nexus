import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Hero.css";
import "bootstrap/dist/css/bootstrap.css";

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
    <Container fluid="md" className="pb-4">
      <Row>
        <Col>
          <div className="text-item">
            <h1 className="mt-0 landing-header">{title}</h1>
            <h1 className="mt-3 mb-4 landing-header2">{subtitle}</h1>
          </div>
        </Col>
        <Col>
          <div className="picture-item">
            <img src={imageSrc} alt={altText} className="landing-logo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

/*
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Hero.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Hero(): JSX.Element {
  return (
    <Container fluid="md" className="pb-4">
      <Row>
        <Col>
          <div className="text-item">
            <h1 className="mt-0 landing-header">Welcome To</h1>
            <h1 className="mt-3 mb-4 landing-header2">
              NexusRead<sup>©</sup>
            </h1>
            <p className="my-5 mb-3 fs-2 landing-sub-header">
              The Ever Evolving Content Business
            </p>
          </div>
        </Col>
        <Col>
          <div className="picture-item">
            <img
              src={"/pictures/NR-logo.png"}
              alt="NexusRead Main logo"
              className="landing-logo"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
*/
