import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service1 from './components/Services/Service1';
import Service2 from './components/Services/Service2';
import Service3 from './components/Services/Service3';
import Trainings from './components/Trainings/Trainings';
import Clients from './components/Clients/Clients';
import Blog from './components/Blog/Blog';
import SearchResults from './components/SearchResults/SearchResults'; // Novo componente
import Services from './components/Services/Services'; // Novo componente
import './App.css';

const data = [
  "Paris", "London", "New York", "Tokyo", "Berlin", "Buenos Aires",
  "Cairo", "Canberra", "Rio de Janeiro", "Dublin"
];

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query.toLowerCase()));
  }
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const dataFiltered = filterData(searchQuery, data);

  return (
    <Router>
      <Header 
        isSearchVisible={isSearchVisible} 
        toggleSearchVisibility={toggleSearchVisibility} 
        setSearchQuery={setSearchQuery} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
      </Routes>
      <div className="results">
        {dataFiltered.map((d, index) => (
          <div key={index} className="result-item">
            {d}
          </div>
        ))}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
