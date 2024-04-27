  import React, { useState } from 'react';
  import './BookSearch.css'
  const BookSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
      onSearch(searchTerm);
    };
    return (
      <div className='search-container'>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <input onClick={handleSearch} type="submit" value="Search!" />
      </div>
    );
  };

  export default BookSearch;