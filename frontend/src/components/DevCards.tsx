import React from "react";
import Daniel from "../assets/daniel_mekuria_img.jpg";
import Kamsi from "../assets/kamsi_ozorji_img.jpg"
import "../styles/Mission.css";


interface Person {
  name: string;
  role: string;
  image: string;
}

const people: Person[] = [
  {
    name: "Daniel Mekuria",
    role: "Co-founder",
    image: Daniel,
  },
  {
    name: "Kamsi Ozorji",
    role: "Co-founder",
    image: Kamsi,
  },
];

export default function BioCard(): JSX.Element {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-header">
          <h2>The Minds Behind Nexus</h2>
          <p>
            We are a team of highly dedicated and motivated individuals that are driven to give a platform of expression to creative thinkers.
          </p>
        </div>

        <div className="bio-grid">
          {people.map((person) => (
            <div key={person.name} className="bio-card">
              <div className="person-container">
                <div className="image-container">
                  <div className="circle-image">
                    <img src={person.image} alt={person.name} />
                  </div>
                </div>
                <div className="person-info">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
