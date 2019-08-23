import React, { useState, useEffect } from 'react';
import axios from 'axios';

function  VideoPlayer(props) {
  const movieId = props.movieId;
  const [movie, setMovie] = useState('');

  useEffect(() => {
    getMovie();
  }, []);

  function getMovie() {
    axios
      .get(`http://localhost:3001/api/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  return (
    <iframe
      width="100%"
      height="516"
      src={movie.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default VideoPlayer;
