import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '../../assets/logo.svg';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from '../SearchBar/SearchBar';

const GlobalStyle = createGlobalStyle`
  .content-wrapper.blur {
    filter: blur(3px);
  }

  .search-bar-container {
    display: none; /* Esconde a barra de pesquisa por padrão */
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0; /* Aumentado o padding para dar mais espaço */
  }

  .header-expanded .search-bar-container {
    display: flex; /* Mostra a barra de pesquisa quando o header está expandido */
  }
`;

const HeaderContainer = styled.header`
  background-color: var(--background-header-footer);
  color: var(--text-primary-footer);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  height: 80px;

  &.header-expanded {
    height: auto; /* Ajusta a altura automaticamente para acomodar o conteúdo */
  }
`;

const TopHeader = styled.div`
  background-color: var(--background-top-header);
  color: var(--text-primary-footer);
  padding: 0.5rem 0;
  width: 100%;
  height: 35px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TopNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const TopNavList = styled.ul`
  list-style: none;
  display: flex;
`;

const TopNavItem = styled.li`
  margin-left: 1rem;
`;

const TopNavLink = styled(Link)`
  color: var(--text-primary-footer);
  text-decoration: none;
  font-size: 0.875rem;
  text-transform: capitalize;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--link-hover);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    max-height: 90px; /* Controla o tamanho do logo */
  }
`;

const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto; /* Garante que o menu fique alinhado à direita */
`;

const NavItem = styled.li`
  margin-left: 1rem;
  position: relative;

  &.dropdown:hover .dropdown-menu {
    display: block;
  }
`;

const NavLink = styled.span`
  color: var(--text-primary-footer);
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--link-hover);
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--background-header-footer); /* Mesma cor do header */
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  min-width: 200px;
  border-radius: 0.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  margin: 0;
`;

const DropdownLink = styled(Link)`
  color: white; /* Cor da fonte branca */
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--dropdown-hover);
  }
`;

const SearchIconWrapper = styled(IconButton)`
  font-size: 1.2rem;
  background: none;
  border: none;
  color: var(--text-primary-footer);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-hover);
  }
`;

const SearchBarContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: var(--background-header-footer);
`;

const Header = ({ isSearchVisible, toggleSearchVisibility, setSearchQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const handleNavigation = (path) => {
    if (isSearchVisible) {
      toggleSearchVisibility();
    }
    navigate(path);
  };

  useEffect(() => {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (isSearchVisible) {
      contentWrapper.classList.add('blur');
      searchInputRef.current?.focus();
    } else {
      contentWrapper.classList.remove('blur');
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-bar-container') && !event.target.closest('.search-icon')) {
        if (isSearchVisible) {
          toggleSearchVisibility();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible, toggleSearchVisibility]);

  const handleSearchSubmit = (searchTerm) => {
    setSearchQuery(searchTerm);
    toggleSearchVisibility();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <>
      <GlobalStyle />
      <TopHeader>
        <Container>
          <TopNavigation>
            <TopNavList>
              <TopNavItem>
                <TopNavLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </TopNavLink>
              </TopNavItem>
              <TopNavItem>
                <TopNavLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </TopNavLink>
              </TopNavItem>
              {['/about-us', '/blog'].map((path, index) => (
                <TopNavItem key={index} className={location.pathname === path ? 'active' : ''}>
                  <TopNavLink to={path}>
                    {path === '/about-us' ? 'About Us' : path.replace('/', '')}
                  </TopNavLink>
                </TopNavItem>
              ))}
            </TopNavList>
          </TopNavigation>
        </Container>
      </TopHeader>
      <HeaderContainer className={isSearchVisible ? 'header-expanded' : ''}>
        <Container className="header-content">
          <Logo>
            <Link to="/" className="logo-link">
              <img src={logo} alt="GuardTech Logo" />
            </Link>
          </Logo>
          <MainNavigation>
            <NavList>
              <NavItem className={`dropdown ${location.pathname.includes('/service') ? 'active' : ''}`}>
                <NavLink onClick={() => handleNavigation('/services')}>Services</NavLink>
                {!isSearchVisible && (
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem><DropdownLink to="/service1">Offsensive Security - Pentest</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service2">Web Security</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service3">Mobile Security</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service4">API Security</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service5">Security Training</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service6">Tool Optimization</DropdownLink></DropdownItem>
                    <DropdownItem><DropdownLink to="/service7">Consulting Services</DropdownLink></DropdownItem>
                  </DropdownMenu>
                )}
              </NavItem>
              <NavItem className={location.pathname === '/trainings' ? 'active' : ''}>
                <NavLink onClick={() => handleNavigation('/trainings')}>Trainings</NavLink>
              </NavItem>
              <NavItem className={location.pathname === '/contact-us' ? 'active' : ''}>
                <NavLink onClick={() => handleNavigation('/contact-us')}>Contact Us</NavLink>
              </NavItem>
              <NavItem className="search">
                <SearchIconWrapper onClick={toggleSearchVisibility} aria-label="search" className="search-icon">
                  {isSearchVisible ? <CloseIcon style={{ fill: "white" }} /> : <SearchIcon style={{ fill: "white" }} />}
                </SearchIconWrapper>
              </NavItem>
            </NavList>
          </MainNavigation>
        </Container>
        <SearchBarContainer className="search-bar-container">
          <SearchBar setSearchQuery={handleSearchSubmit} ref={searchInputRef} />
        </SearchBarContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
