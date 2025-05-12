import React from "react";
import "../styles/Library.css";
import CarouselContent from "../components/CarouselContent";

interface LibraryProps {
  username?: string;
}

export default function Library({ username = "Guest" }: LibraryProps): JSX.Element {
  return (
    <div className="library-page">
      <div className="spacer-xl" />
      <h1 className="main-header">Welcome, {username}</h1>
      <div className="spacer-l" />

      <div className="content-container">
        <div className="spacer-l" />
        <CarouselContent
          title="NexusPicks"
          subheading="Find books you might like"
        />
        <div className="spacer-xl" />
        <CarouselContent
          title="Recommended"
          subheading="Books you may like"
        />
        <div className="spacer-xl" />
        <CarouselContent
          title="Explore"
          subheading="Try out a new book"
        />
      </div>

      <div className="spacer-xl" />
    </div>
  );
}
