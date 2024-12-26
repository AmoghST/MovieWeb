

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Moviecast from './Moviecast';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movie/${id}`);
        setMovie(response.data);  
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();    
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="movie-details-container">
      {movie ? (
        <div className="movie-card">
          <div className='mydiv'>
          <div className='card'>
          <div className="movie-header">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            
            <div className="movie-info">
              <h1 className="movie-title">{movie.title}</h1>
              <p className="movie-rating">
                <strong>Rating:</strong> {movie.vote_average}
              </p>
              <p className="movie-genres">
                <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
              </p>
              <p className="movie-budget">
                <strong>Budget:</strong> ${movie.budget.toLocaleString()}
              </p>
              <p className="movie-release-date">
                <strong>Release Date:</strong> {movie.release_date}
              </p>
            </div>
          </div>
          <div className='overview'>
            <h2 >Overview</h2>
            <p >{movie.overview}</p>
          </div>
          </div>
          <div className='secondcard'>
              <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="movie-poster-background"
            />
            </div>
          </div>
         
      
          <div className="movie-cast">
            <h2>Cast</h2>
            <Moviecast id={id} />
          </div>
        </div>
      ) : (
        <p>No movie found</p>
      )}
    </div>
  );
};

export default MovieDetails;

