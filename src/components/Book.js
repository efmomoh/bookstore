import React from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import './Styles/Book.css';

function Book({ book, deleteBook }) {
  const {
    id, category, title, author,
  } = book;

  const handleDeleteClick = () => {
    deleteBook(id);
  };

  const commentsButton = <button type="button">Comments</button>;

  const removeButton = (
    <button type="button" onClick={handleDeleteClick}>
      Remove
    </button>
  );

  const editButton = <button type="button">Edit</button>;

  return (
    <li className="book-container">
      <div className="book">
        <div className="book-details">
          <h3>{category}</h3>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="book-buttons">
          {commentsButton}
          {removeButton}
          {editButton}
        </div>
      </div>
      <Status />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
