import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { BookContext } from "../Contexts/BooksContext";

function Book({ book }) {
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(BookContext);
  return (
    <div className="container-fluid mt-3 ">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <p>{book.id}</p>
          <h4
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
            className="close"
          >
            &times;
          </h4>
        </div>
        <div className="card-body">
          <h4>Book title : {book.title}</h4>
          <p>Published in : {book.year}</p>

          <Button onClick={() => setShow(true)}>Update</Button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <h4>{book.title}</h4>
        </Modal.Header>
        <Modal.Body>
          <h2>Update content</h2>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Book;
