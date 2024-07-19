import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = forwardRef(({ setSearchQuery }, ref) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    focus: () => {
      document.getElementById('search-bar').focus();
    }
  }));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearchSubmit} className="search-input-container">
        <input
          id="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <IconButton type="submit" aria-label="search" className="search-submit-icon">
          <SearchIcon className="search-icon" />
        </IconButton>
      </form>
    </div>
  );
});

export default SearchBar;
