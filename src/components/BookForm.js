import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ addBook }) => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const authorRef = useRef(); // Add a reference for the author input

  const submitBookHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const author = authorRef.current.value; // Get the author from the input field

    if (title && category && author) {
      // Only add a book if all fields are filled out
      addBook({ title, author, category });
    }

    // Clear input fields
    titleRef.current.value = '';
    categoryRef.current.value = '';
    authorRef.current.value = '';
  };

  return (
    <div className="add-book-div">
      <h1 className="add-book">Add New Book</h1>
      <form onSubmit={submitBookHandler}>
        <div className="form-container">
          <div>
            <label htmlFor="title">
              <input
                type="text"
                id="title"
                placeholder="Book title"
                ref={titleRef}
              />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              <input
                type="text"
                id="author"
                placeholder="Author"
                ref={authorRef}
              />
            </label>
          </div>
          <div>
            <label htmlFor="category">
              <select id="category" ref={categoryRef} required>
                <option disabled selected value>
                  Category
                </option>
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Economy">Economy</option>
              </select>
            </label>
          </div>
          <div>
            <button className="form-btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
