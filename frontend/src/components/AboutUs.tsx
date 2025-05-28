import React from "react";
import Landing from "../components/AboutLanding";
import MissionStatement from "../components/MissionStatament";
import BioCard from "../components/DevCards";

export default function AboutUs() {
  return (
    <div>
      <Landing />
      <h1 className="mx-5 p-5">About Nexus</h1>
      <MissionStatement />
      <div className="py-5"></div>
      <BioCard />
      <div className="py-5"></div>
    </div>
  );
}
