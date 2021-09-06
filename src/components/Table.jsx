import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

const Table = () => {

  const books = useSelector((state) => state.books.books);
  const booksRendering = books.map((book,idx) => {
    return (
      <Book
        key={idx}
        id={book.id}
        title={book.title}
        name={book.name}
        author={book.author}
        isbn={book.isbn}
      />
    );
  });
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN#</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="book-list">
        {booksRendering}
      </tbody>
    </table>
  );
};
export default Table;
