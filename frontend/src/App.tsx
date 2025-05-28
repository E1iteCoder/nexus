import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./assets/NR-Logo.png";
import Hero from "./components/Hero";
import Introduction from "./pages/Introduction";

export default function App() {
  return (
    <div className="App">
      <Hero
        title="Welcome to"
        subtitle="Nexus"
        imageSrc={Logo}
        altText="Nexus main logo"
      />
      <Introduction />
    </div>
  );
}
