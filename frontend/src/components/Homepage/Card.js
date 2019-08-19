import React from 'react';

function Card({ movies }) {
  console.log(movies, 'these are movies');
  if (!movies) return '';
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <>
            <div
              className="card card-deck"
              style={{ width: '210px', margin: '4px' }}
            >
              <img
                className="card-img-top"
                src="https://img.yts.lt/assets/images/movies/london_rampage_2018/medium-cover.jpg"
                alt="Card"
                width="210px"
                height="315px"
              />
              <div className="card-img-overlay">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-text">{movie.genre}</p>
                <a href="#" className="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
