import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

import './Books.css';

const Books = ({ title, author }) => (
  <>
    <div className="books-container">
      <h2>{title}</h2>
      <p>by</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
    <Form />
  </>
);

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
