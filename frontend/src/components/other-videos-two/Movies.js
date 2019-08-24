import React from 'react';
import './css/Movie.css';

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index} className="other-videos-card">
            <div className="wrapper-for-other-videos ">
              <img
                src="https://i.ytimg.com/vi/bvfkUrJWlt0/maxresdefault.jpg"
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text" style={{ color: 'white',fontWeight:"500", fontSize:"12px", top:"9%", left:"35%"}}>
                  {/* {movie.title} */}
                  <div style={{ textAlign: 'left', marginTop:'20%' }}>
                    CGI Animated Short Film HD "The Blue & the Beyond " by San
                    Jose State University | CGMeetup
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
