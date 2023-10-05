import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const disPatch = useDispatch();

  const deleteHandler = (id) => {
    disPatch(removeBook({ id }));
  };

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} deleteBook={deleteHandler} />
      ))}
      <BookForm />
    </>
  );
};

export default BookList;
