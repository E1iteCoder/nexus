import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Introduction.css";

export default function Introduction(): JSX.Element{
  return (
    <section id="intro-section">
      <Container fluid="md" className="pb-4 pt-5 intro-section">
        <Row>
          <Col>
            <h2>Introduction</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <p className="lead">
              Welcome to NexusRead, where we strive to take your reading experience to new heights. Our platform offers a unique way to explore the imaginations and creations of writers and artists from all over the world, through a variety of mediums and formats.
            </p>
            <p>
              Whether you're looking to discover new authors or genres, or simply want to enjoy your favourite stories in a fresh and innovative way, NexusRead has got you covered. Join us today and embark on a journey of endless possibilities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

