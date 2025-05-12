import React from "react";
import "../styles/Modal.css";

interface Props {
  author: string;
  description: string;
  image: string;
  title: string;
  rating: number;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function BookModal(props: Props): JSX.Element | null {
  const handleReadBook = () => {
    window.location.href = "/book-reading";
  };

  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay" onClick={props.toggleModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent close on content click
      >
        <div className="modal-header">
          <h5 className="modal-title">{props.title}</h5>
          <button className="close-btn" onClick={props.toggleModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <img src={props.image} alt={props.title} className="modal-img" />
          </div>
          <div className="modal-right">
            <div className="modal-text"><strong>By:</strong> {props.author}</div>
            <div className="modal-text"><strong>Description:</strong> {props.description}</div>
            <div className="modal-text"><strong>Rating:</strong> {props.rating} / 5.0</div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="read-btn" onClick={handleReadBook}>
            Read Book
          </button>
        </div>
      </div>
    </div>
  );
}
