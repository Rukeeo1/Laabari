import React from 'react';
import './css/MovieGrid.css';

function MovieGrid(props) {
  return (
    <>
      <div className="movie-grid-flex-container">
        <div class="movie-grid-card">
          <img
            src="https://i.ytimg.com/vi/bvfkUrJWlt0/maxresdefault.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div
              class="text"
              style={{ marginTop: '15px !important', color: 'red !important' }}
            >
              <div>Hello World</div>
            </div>
          </div>
        </div>
        <div class="movie-grid-card">
          <img
            src="https://i.ytimg.com/vi/bvfkUrJWlt0/maxresdefault.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div style={{textAlign:"left"}}>
              CGI Animated Short Film HD "The Blue & the Beyond " by San Jose
              State University | CGMeetup
            </div>
          </div>
        </div>
        <div class="movie-grid-card">
          <img
            src="https://i.ytimg.com/vi/bvfkUrJWlt0/maxresdefault.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div style={{textAlign:'left'}}>
              CGI Animated Short Film HD "The Blue & the Beyond " by San Jose
              State University | CGMeetup
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieGrid;
