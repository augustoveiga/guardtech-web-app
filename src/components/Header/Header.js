import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg'; // ou '../../assets/logo.png'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({ isSearchVisible, toggleSearchVisibility, setSearchQuery }) => {
  const location = useLocation();

  return (
    <>
      <div className="top-header">
        <div className="container">
          <nav className="top-navigation">
            <ul className="top-nav-list">
              <li className="top-nav-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-nav-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="top-nav-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-nav-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              {['/about', '/clients', '/blog'].map((path, index) => (
                <li key={index} className={`top-nav-item ${location.pathname === path ? 'active' : ''}`}>
                  <Link to={path} className="top-nav-link">{path.replace('/', '')}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <header className={`site-header ${isSearchVisible ? 'header-expanded' : ''}`}>
        <div className="container header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="GuardTech Logo" className="logo-img" />
            </Link>
          </div>
          <nav className="main-navigation">
            <ul className="nav-list">
              <li className={`nav-item dropdown ${location.pathname.includes('/service') ? 'active' : ''}`}>
                <span className="nav-link">
                  Services
                </span>
                {!isSearchVisible && (
                  <ul className="dropdown-menu">
                    {['Service 1', 'Service 2', 'Service 3'].map((service, index) => (
                      <li key={index} className="dropdown-item">
                        <Link to={`/service${index + 1}`} className="dropdown-link">{service}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {['/trainings', '/contact'].map((path, index) => (
                <li key={index} className={`nav-item ${location.pathname === path ? 'active' : ''}`}>
                  <Link to={path} className="nav-link">{path.replace('/', '')}</Link>
                </li>
              ))}
              <li className="nav-item search">
                <IconButton onClick={toggleSearchVisibility} aria-label="search">
                  {isSearchVisible ? <CloseIcon style={{ fill: "white" }} /> : <SearchIcon style={{ fill: "white" }} />}
                </IconButton>
              </li>
            </ul>
          </nav>
        </div>
        {isSearchVisible && (
          <div className="search-bar-container">
            <SearchBar setSearchQuery={setSearchQuery} />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
