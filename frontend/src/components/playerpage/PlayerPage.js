import React from 'react';
import VideoPlayer from '../video-player/VideoPlayer';
import OtherVideos from '../other-videos-page/OtherVideos'
import OtherVideosTwo  from "../other-videos-two/OtherVideosTwo";


function PlayerPage(props) {
  const movieId = props.location.pathname.split('/')[2]; //this gives us the id...
  return (
    <div className="player">
      <VideoPlayer movieId={movieId} />
      <OtherVideos />
      <OtherVideosTwo />
    </div>
  );
}

export default PlayerPage;
