import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../frontend/styles/Mission.css";

interface Person {
  name: string;
  role: string;
  image: string;
}

const people: Person[] = [
  {
    name: "Daniel Mekuria",
    role: "Co-founder",
    image: "/pictures/daniel_mekuria_img.jpg",
  },
  {
    name: "Kamsi Ozorji",
    role: "Co-founder",
    image: "/pictures/kamsi_ozorji_img.jpg",
  },
];

export default function BioCard(): JSX.Element {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container fluid="md" className="pb-4 pt-5">
        <Row>
          <Col>
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
              The Minds Behind NexusRead
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a team of highly dedicated and motivated individuals that are driven to give a platform of expression to creative thinkers.
            </p>
          </Col>
          {people.map((person) => (
            <Col key={person.name} xs={12} md={6} lg={4} className="mb-8">
              <div className="flex items-center person-container">
                <div className="image-container">
                  <div className="circle-image">
                    <img src={person.image} alt="" className="rounded-full" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
