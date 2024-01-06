import React from "react";
import { Form } from "react-bootstrap";
import "../styles/Filter.css";

type FilterProps = {
  isOpen: boolean;
};

export default function Filter({ isOpen }: FilterProps) {
  const filterClass = `filter ${isOpen ? "open" : ""}`;

  return (
    <div className={filterClass}>
      <p>Filter</p>
      <ul>
        <li>
          <label htmlFor="filter-1">
            Genre
          </label>
          <Form.Select id="filter-1-1" className="border-secondary">
            <option></option>
            <option id="filter-1-1">Fan-fiction</option>
            <option id="filter-1-2">Comedy</option>
            <option id="filter-1-3">Family</option>
            <option id="filter-1-4">Mystery</option>
            <option id="filter-1-5">Drama</option>
          </Form.Select>
        </li>
        <li>
          <label htmlFor="filter-2">
            Year
          </label>
          <input type="text" id="filter-2-1" />
        </li>
        <li>
          <label htmlFor="filter-3">
            Author
          </label>
          <input type="text" id="filter-3-1" />
        </li>
        <li>
          <label htmlFor="filter-4">
            Type
          </label>
          <Form.Select>
            <option></option>
            <option id="filter-4-1">All</option>
            <option id="filter-4-2">Article</option>
            <option id="filter-4-3">Blog</option>
            <option id="filter-4-4">Novel</option>
            <option id="filter-4-5">Poem</option>
          </Form.Select>
        </li>
      </ul>
    </div>
  );
}

