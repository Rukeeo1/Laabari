import React, { useState, useEffect } from 'react';
import { movieQuery } from '../../queries/queries';
import { graphql, compose } from 'react-apollo';
import '../other-videos-page/css/OtherVideos.css';

function OtherVideos(props) {
  const [movies, setMovies] = useState();

  const tenMovie = movies ? movies.slice(0, 10) : [];
  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });
  console.log(movies);

  return (
    <div className="scrollmenu container" style={{ width: '100%' }}>
      {tenMovie.map((movie, index) => {
        return (
          <a key={index} >
             <img src={movie.poster} />
            {movie.title}
          </a>
        );
      })}
    </div>
  );
}
export default compose(graphql(movieQuery, { name: 'movieQuery' }))(
  OtherVideos
);
//export default OtherVideos;
