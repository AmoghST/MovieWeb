import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Moviecast.css';

function Moviecast({id}) {
    const newid = id;
    
  const [cast, setCast] = useState([]);

  useEffect(() => {
     axios
      .get(`http://localhost:5000/movies/credits/${newid}`) 
      .then(response => setCast(response.data.cast))
      .catch(error => console.error('Error fetching cast:', error));
  }, [newid]);  
  

  return (
    <div className="App">
      <header className="header">
      </header>

      <section className="cast-section">
        
        <div className="cast-list">
          {cast.slice(0, 6).map(member => (
            <div key={member.cast_id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                alt={member.name}
                className="cast-image"
              />
              <div className="cast-details">
                <p><strong>{member.name}</strong></p>
                <p>Character: {member.character}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Moviecast;
