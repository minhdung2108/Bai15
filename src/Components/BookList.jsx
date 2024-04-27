import React, { useContext, useState, useMemo } from 'react';
import BookShow from './BookShow';
import BookSearch from './BookSearch'; 
import './BookList.css';
import BookContext from '../context/book';

const BookList = () => {
  const { books } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.des.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [books, searchTerm]);

  const searchBooks = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='book-list'>
      <BookSearch onSearch={searchBooks} /> 
      {filteredBooks.length > 0 ? ( 
        filteredBooks.map((book) => (
          <BookShow key={book.id} book={book} />
        ))
      ) : (
        <p>Không tìm thấy</p>
      )}
    </div>
  );
};

export default BookList;