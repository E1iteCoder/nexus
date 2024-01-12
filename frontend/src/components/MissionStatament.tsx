import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../frontend/styles/Mission.css";
import MissionCard from "./CardComponent";

export default function MissionStatement(): JSX.Element {
  return (
    <Container fluid="md" className="pb-5">
      <Row className="justify-content-center">
        <Col>
          <MissionCard
            title="Mission Statement"
            text="Our mission for this company is to enpower the voices of new writers with a platform that is supportive of their creative expressions."
            image={""}
            alt={""}
          />
        </Col>
        <Col>
          <MissionCard
            title="Future Goals"
            text="We hope in the near future to expand this site to others to include their artistic and creative talents and ensure that reading is innovative."
            image={""}
            alt={""}
          />
        </Col>
      </Row>
    </Container>
  );
}
