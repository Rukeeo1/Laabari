import React, { useEffect } from 'react';

function VideoList() {
  // make a calll to the video url
  //loop through the table and append  it to a tr...
  useEffect(() => {
    getVideos();
  });

  function getVideos(){
    alert('hello rukee')
  }

  return (
    <>
      <p>i am a list of all the videos you have...</p>
    </>
  );
}

export default VideoList;
