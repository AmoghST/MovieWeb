import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  
  const navigate = useNavigate();
  const moviepagedetail =(id)=>{
    navigate(`/movie/${id}`);

    
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '120px', justifyContent: 'center', padding: '40px' }}>
      {movies.map((movie) => (
        <div key={movie.id} onClick={()=>  moviepagedetail(movie.id)} style={{ width: '200px', textAlign: 'center' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
          />
          <h3 style={{ fontSize: '18px', marginTop: '10px' }}>{movie.title}</h3>
          <h4 style={{ fontSize: '12px'}}>Rating:{movie.vote_average}</h4>

          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
