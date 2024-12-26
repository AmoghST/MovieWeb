import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import TopRated from './components/TopRated';
import Navbar from './components/Navbar';
import Upcomingmovie from './components/Upcomingmovie';
import SearchResults from './components/SearchResults';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moviecast from './components/Moviecast';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [topmovie, setTopmovie] = useState([]);
  const [upcomingmovie, setUpcomingmovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/movies/popular');
        console.log(response);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
    const fetchpopularmovie = async ()=>{
      try {
        const response = await axios.get('http://localhost:5000/movies/toprated');
        setTopmovie(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }

    }
    fetchpopularmovie();
    const fetchupcomingmovie = async ()=>{
      try {
        const response = await axios.get('http://localhost:5000/movies/upcomingmovie');
        setUpcomingmovie(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }

    }
    fetchupcomingmovie();

  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movieslist" element={<MovieList movies={movies} />} />
        <Route path="/toprated" element={<TopRated topmovie={topmovie} />} />
        <Route path="/upcomingmovie" element={<Upcomingmovie upcomingmovie={upcomingmovie} />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetail />} />





      </Routes>
    </Router>
  );
};

export default App;
