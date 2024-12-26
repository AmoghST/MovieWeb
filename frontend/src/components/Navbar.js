import React, { useState } from 'react';
import './Navbar.css';   
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return;
    navigate(`/search/${searchQuery}`); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MovieDb</h2>
      </div>
      <div className="navbar-links">
        <Link to="/movieslist" className="navbar-link">Popular Movie</Link>
        <Link to="/toprated" className="navbar-link">Top Rated</Link>
        <Link to="/upcomingmovie" className="navbar-link">Upcoming</Link>

      </div>
      <form onSubmit={handleSearchSubmit} className="navbar-search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="navbar-search-input"
        />
        <button type="submit" className="navbar-search-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
