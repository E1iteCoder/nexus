import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  author: string;
  description: string;
  image: string;
  title: string;
  rating: number;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function BookModal(props: Props): JSX.Element {
  const handleReadBook = () => {
    window.location.href = "/book-reading";
  };

  return (
    <Modal show={props.isOpen} onHide={props.toggleModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ml-3">By: {props.author}</div>
        <div className="ml-3"> Description: {props.description} </div>
        <div className="ml-3">Rating: {props.rating} / 5.0</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleReadBook}>
          Read Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
