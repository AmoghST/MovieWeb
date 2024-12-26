import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams();  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

  const moviepagedetail=(id)=>{
    navigate(`/movie/${id}`);

  }

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies/${query}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div>
        
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '120px', justifyContent: 'center', padding: '40px' }}>
      {results.map((movie) => (
        <div key={movie.id} onClick={()=>moviepagedetail(movie.id)} style={{ width: '200px', textAlign: 'center' }}>
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
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
