import React from "react";
import "../../frontend/styles/Mission.css"; // Ensure this file contains the necessary styles
import "../../frontend/styles/BioCard.css"

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
    <div className="bio-card-container">
      <div className="bio-card-content">
        <h2 className="bio-card-title">The Minds Behind NexusRead</h2>
        <p className="bio-card-description">
          We are a team of highly dedicated and motivated individuals that are driven to give a platform of expression to creative thinkers.
        </p>
        <div className="bio-card-grid">
          {people.map((person) => (
            <div key={person.name} className="bio-card">
              <div className="bio-card-image">
                <img src={person.image} alt={person.name} />
              </div>
              <h3 className="bio-card-name">{person.name}</h3>
              <p className="bio-card-role">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
