import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  id, title, author, category,
}) => (
  <section className="book-container">
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{category}</p>
        <button type="button" id={id}>
          delete
        </button>
      </div>
    </li>
  </section>
);

export default Book;

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
