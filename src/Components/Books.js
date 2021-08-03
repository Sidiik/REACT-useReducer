import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BooksContext";
import Book from "./Book";
import { Modal, Button } from "react-bootstrap";

function Books() {
  const { books, dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        year,
      },
    });
    setTitle("");
    setYear("");
  };
  return (
    <div className="books">
      <div className="header d-flex justify-content-between align-items-center">
        <h1>Books</h1>
        <Button onClick={() => setShow(true)}>Add another book</Button>
      </div>
      <div className="conainer-fluid">
        {books.length > 0 ? (
          <>
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </>
        ) : (
          <p className="mt-4 text-secondary">No books to show</p>
        )}
      </div>
      <Modal show={show}>
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <h3>Add new book</h3>
          </Modal.Header>
          <Modal.Body>
            <div className="form-input mt-1">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book title"
              />
            </div>
            <div className="form-input mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Year published"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <input type="submit" hidden />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add</Button>
            <Button className="btn-danger" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Books;
