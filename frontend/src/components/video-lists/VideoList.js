import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import axios from 'axios';

const movieQuery = gql`
  {
    movies {
      title
      similarMovies
      year
      synopsis
    }
  }
`;

function VideoList(props) {
  const [movies, setMovies] = useState('');
  console.log(props.data, 'this is the props');
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

export default graphql(movieQuery)(VideoList);
