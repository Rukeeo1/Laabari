import React from 'react';
import VideoPlayer from '../video-player/VideoPlayer';

function PlayerPage(props) {
  const movieId = props.location.pathname.split('/')[2]; //this gives us the id...
  return (
    <div className="player">
      <VideoPlayer movieId={movieId} />
      <h1>hello rukee what's up</h1>
    </div>
  );
}

export default PlayerPage;
