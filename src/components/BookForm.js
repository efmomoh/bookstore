import React from 'react';
import './BookForm.css';

const BookForm = () => (
  <>
    <h2 className="header2">Add New Book</h2>
    <div className="form-container">
      <form className="form">
        <input type="text" placeholder="Book title" id="title" />
        <input type="text" placeholder="Book author" id="author" />
        <input type="text" placeholder="Book category" id="category" />
        <button type="button" id="add-new-book">
          Add Book
        </button>
      </form>
    </div>

  </>
);

export default BookForm;
