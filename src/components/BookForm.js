import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !author || !category) {
      setErrorMessage('Please enter Title, Author and Category.');

      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2 className="eader2">Add New Book</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Book title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {errorMessage && (
          <div className="text-danger error-message">{errorMessage}</div>
        )}
        <button type="submit" id="add-new-book" onClick={submitHandler}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
