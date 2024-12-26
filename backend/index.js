const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';

app.use(cors());

app.get('/movies/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching movies');
  }
});

app.get('/movies/toprated', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching movies');
  }
});

app.get('/movies/upcomingmovie', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching movies');
  }
});

app.get('/movies/:searchQuery', async (req, res) => {
  const { searchQuery } = req.params; // Extract category from URL
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching movies');
  }
});


app.get('/movie/:id', async (req, res) => {
  const { id } = req.params; // Extract movie ID from URL
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    
    // Send the movie details as the response
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching movie data');
  }
});

app.get('/movies/credits/:newid', async (req, res) => {
  const { newid } = req.params;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${newid}/credits?api_key=${API_KEY}&language=en-US`, {
   
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
