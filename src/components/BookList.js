import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Fran Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-first Century',
      author: 'Thomas Piketty',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
