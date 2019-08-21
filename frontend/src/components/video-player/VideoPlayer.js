import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoPlayer(props) {
  const movieId = props.movieId;
  console.log(movieId, 'hello');
  //fectch movie
  //set state
  //return <videoplayer className=""></videoplayer>
  const [movie, setMovie] = useState('');
  console.log(movie);
  console.log(movie._id, 'this is the movies id');

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
      width="560"
      height="315"
      src={movie.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> 
   
  );
}

export default VideoPlayer;
