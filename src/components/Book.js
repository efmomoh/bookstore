import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book({ book, deleteBook }) {
  return (
    <div>
      <li>
        <div>
          <h3>title:</h3>
          {book.title}
        </div>
        <div>
          <p>author:</p>
          {book.author}
        </div>
        <div>
          <p>category:</p>
          {book.category}
        </div>
        <button type="button" onClick={() => deleteBook(book.id)}>
          Delete
        </button>
      </li>
    </div>
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
