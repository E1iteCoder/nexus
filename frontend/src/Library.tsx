import React from "react";
import CarouselContent from "../components/CarouselContent";

export default function Library() {
  return (
    <div>
      <div className="py-5"></div>
      <h1 className="mx-4 my-5 text-center main-header">
        Welcome, {/**Username **/}
      </h1>
      <div className="py-4"></div>
      <div className="container-fluid">
        <div className="py-4"></div>
        <CarouselContent
          title="NexusPicks"
          subheading="Find books you might like"
        />
        <div className="py-5"></div>
        <CarouselContent title="Recommended" subheading="Books you may like" />
        <div className="py-5 m-3"></div>
        <CarouselContent title="Explore" subheading="Try out a new book" />
      </div>
      <div className="py-5 m-3"></div>
    </div>
  );
}
