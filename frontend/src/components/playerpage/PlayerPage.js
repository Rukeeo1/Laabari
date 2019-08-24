import React, {useEffect,useState} from 'react';
import VideoPlayer from '../video-player/VideoPlayer';
import OtherVideos from '../other-videos-page/OtherVideos';
import OtherVideosTwo from '../other-videos-two/OtherVideosTwo';
import Movie from '../other-videos-two/Movies';
import { movieQuery } from '../../queries/queries';
import { graphql, compose } from 'react-apollo';
import MovieGrid from '../movie-grid/MovieGrid'

//notes OtherVideosTwo should be called scrollable


function PlayerPage(props) {
  const movieId = props.location.pathname.split('/')[2]; //this gives us the id...
  // const tenMovie = movies ? movies.slice(0, 10) : [];
  const [movies, setMovies] = useState();
  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });

  return (
    <div className="player">
      <VideoPlayer movieId={movieId} />
   
      {/* <OtherVideos /> */}
       <OtherVideosTwo />
       <MovieGrid />
    
    </div>
  );
}

export default compose(graphql(movieQuery, { name: 'movieQuery' }))(PlayerPage);

// export default PlayerPage;
