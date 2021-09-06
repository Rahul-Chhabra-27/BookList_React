import React, { Fragment, useReducer } from "react";
import books, { bookActions } from "../store/Books-slice";

import { useDispatch } from "react-redux";

const reducer = (state, { type, value }) => {
  switch (type) {
    case "NAME":
      return { ...state, name: value };
    case "TITLE":
      return { ...state, title: value };
    case "ISBN":
      return { ...state, isbn: value };
    case "AUTHOR":
      return { ...state, author: value };
    case "RESET":
      return { ...initialState };
    default:
      console.log("error");
  }
};
const initialState = { name: "", title: "", author: "", isbn: "" };
const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatcher = useDispatch();

  const nameChangeHandler = (e) =>
    dispatch({ type: "NAME", value: e.target.value });

  const titleChangeHandler = (e) =>
    dispatch({ type: "TITLE", value: e.target.value });

  const authorChangeHandler = (e) =>
    dispatch({ type: "AUTHOR", value: e.target.value });

  const isbnChanheHandler = (e) =>
    dispatch({ type: "ISBN", value: e.target.value });

  const submitHandler = (e) => {

    e.preventDefault();
    const book = {...state,id:Math.floor(Math.random()*10)};
    
    if(book.name === '' || book.title === '' || book.isbn === '' || books.author === '') {
        return;
    }
    dispatcher(bookActions.addBookToList(book)); // redux part
    dispatch({type:'RESET'}); // reducer call
  };

  return (
    <Fragment>
      <h1 className="display-4 text-center">
        <i className="fas fa-book-open text-primary"></i> My
        <span className="text-primary">Book</span>List
      </h1>
      <form id="book-form" onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          <label htmlFor="author">Student Name</label>
          <input
            type="text"
            required
            id="StudentName"
            value={state.name}
            onChange={(e) => nameChangeHandler(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            value={state.title}
            onChange={(e) => titleChangeHandler(e)}
            id="title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            required
            id="author"
            value={state.author}
            onChange={(e) => authorChangeHandler(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN#</label>
          <input
            type="text"
            required
            value={state.isbn}
            onChange={(e) => isbnChanheHandler(e)}
            id="isbn"
            className="form-control"
          />
        </div>
        <input
          type="submit"
          value="Add Book"
          className="btn btn-primary btn-block"
        />
      </form>
    </Fragment>
  );
};
export default Form;
