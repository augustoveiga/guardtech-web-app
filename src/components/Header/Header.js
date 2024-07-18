import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg'; // ou '../../assets/logo.png'

const Header = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

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
              <li className={`top-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" className="top-nav-link">About Us</Link>
              </li>
              <li className={`top-nav-item ${location.pathname === '/clients' ? 'active' : ''}`}>
                <Link to="/clients" className="top-nav-link">Clients</Link>
              </li>
              <li className={`top-nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog" className="top-nav-link">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Security Services" className="logo-img" />
            </Link>
          </div>
          <nav className="main-navigation">
            <ul className="nav-list">
              <li className={`nav-item dropdown ${location.pathname.includes('/service') ? 'active' : ''}`}>
                <span className="nav-link">
                  Services
                </span>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><Link to="/service1" className="dropdown-link">Service 1</Link></li>
                  <li className="dropdown-item"><Link to="/service2" className="dropdown-link">Service 2</Link></li>
                  <li className="dropdown-item"><Link to="/service3" className="dropdown-link">Service 3</Link></li>
                </ul>
              </li>
              <li className={`nav-item ${location.pathname === '/trainings' ? 'active' : ''}`}>
                <Link to="/trainings" className="nav-link">Trainings</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item search">
                <button className="nav-link search-icon" aria-label="Search" onClick={toggleSearch}>
                  <i className="fas fa-search"></i>
                </button>
                {searchOpen && (
                  <div className="search-box">
                    <input type="text" placeholder="Search..." className="search-input" />
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
