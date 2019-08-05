import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VideoList() {
  const [movies, setMovies] = useState('');
  // make a calll to the video url
  //loop through the table and append  it to a tr...
  useEffect(() => {
    getVideos();
  });

  function getVideos() {
    axios
      .get(`http://localhost:3001/api/users`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  return (
    <>
      <p>i am a list of all the videos you have...</p>
    </>
  );
}

export default VideoList;
