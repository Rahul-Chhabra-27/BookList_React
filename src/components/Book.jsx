import React from 'react';
import { bookActions } from '../store/Books-slice';
import { useDispatch } from 'react-redux';

const Book = ({ id ,title, isbn, author, name}) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(bookActions.removeBookFromList(id));
  }
    return (
      <tr>
        <td>{name}</td>
        <td>{title}</td>
        <td> {author}</td>
        <td>{isbn}</td>
        <td> <button onClick={removeBookHandler} className="btn btn-danger btn-sm delete">X</button></td>
      </tr>
    );
}
export default Book;