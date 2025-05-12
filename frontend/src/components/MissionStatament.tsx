import React from "react";
import "../styles/Mission.css";
import MissionCard from "./CardComponent";

export default function MissionStatement(): JSX.Element {
  return (
    <div className="mission-container">
      <div className="mission-content">
        <div className="mission-column">
          <MissionCard
            title="Mission Statement"
            text="Our mission for this company is to empower the voices of new writers with a platform that is supportive of their creative expressions."
            image={""}
            alt={""}
          />
        </div>
        <div className="mission-column">
          <MissionCard
            title="Future Goals"
            text="We hope in the near future to expand this site to others to include their artistic and creative talents and ensure that reading is innovative."
            image={""}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}
