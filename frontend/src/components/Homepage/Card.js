import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Card({ movies }) {
  console.log(movies, 'these are movies');

  if (!movies) return '';
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
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
              <span>
                <Link to={`/videos/${movie._id}`} className="btn btn-primary">
                  See Profile
                </Link>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}


export default Card;
