import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PrimaryFooter from './components/Footer/PrimaryFooter';
import SecondaryFooter from './components/Footer/SecondaryFooter';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Service1 from './components/Services/Service1';
import Service2 from './components/Services/Service2';
import Service3 from './components/Services/Service3';
import Trainings from './components/Trainings/Trainings';
import Blog from './components/Blog/Blog';
import SearchResults from './components/SearchResults/SearchResults';
import Services from './components/Services/Services';
import Post1 from './components/Blog/Posts/Post1/Post1';
import Post2 from './components/Blog/Posts/Post2/Post2';
import Post3 from './components/Blog/Posts/Post3/Post3';
import Post4 from './components/Blog/Posts/Post4/Post4';
import Post5 from './components/Blog/Posts/Post5/Post5';
import Post6 from './components/Blog/Posts/Post6/Post6';
import Post7 from './components/Blog/Posts/Post7/Post7';
import Post8 from './components/Blog/Posts/Post8/Post8';
import Post9 from './components/Blog/Posts/Post9/Post9';
import Post10 from './components/Blog/Posts/Post10/Post10';
import Post11 from './components/Blog/Posts/Post11/Post11';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <Router>
      <div className="content">
        <Header 
          isSearchVisible={isSearchVisible} 
          toggleSearchVisibility={toggleSearchVisibility} 
          setSearchQuery={setSearchQuery} 
        />
        <div className="content-wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/service1" element={<Service1 />} />
              <Route path="/service2" element={<Service2 />} />
              <Route path="/service3" element={<Service3 />} />
              <Route path="/services" element={<Services />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/post1" element={<Post1 />} />
              <Route path="/blog/post2" element={<Post2 />} />
              <Route path="/blog/post3" element={<Post3 />} />
              <Route path="/blog/post4" element={<Post4 />} />
              <Route path="/blog/post5" element={<Post5 />} />
              <Route path="/blog/post6" element={<Post6 />} />
              <Route path="/blog/post7" element={<Post7 />} />
              <Route path="/blog/post8" element={<Post8 />} />
              <Route path="/blog/post9" element={<Post9 />} />
              <Route path="/blog/post10" element={<Post10 />} />
              <Route path="/blog/post11" element={<Post11 />} />
              <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
            </Routes>
          </main>
        </div>
        <PrimaryFooter />
        <SecondaryFooter />
      </div>
    </Router>
  );
};

export default App;
