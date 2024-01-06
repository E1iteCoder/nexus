import React, { useState } from "react";
import "../styles/Search.css";
import Filter from "../components/Filter";

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleFilterClick() {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <div className="container">
      <div className="search-container">
        <input placeholder="Search" className="search-input" />
        <button className="filter-button" onClick={handleFilterClick}>
          <i className="fas fa-filter"></i>
        </button>
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {isFilterOpen && <Filter isOpen={isFilterOpen} />}
    </div>
  );
}
