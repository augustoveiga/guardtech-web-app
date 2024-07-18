import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
          onInput={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <IconButton type="submit" className="search-submit-icon" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
