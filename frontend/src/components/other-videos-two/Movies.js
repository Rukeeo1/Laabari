import React from 'react';

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {movies.map((movie, index) => {
       return <div key={index} className="list-group-item">
          {movie.title}
        </div>;
      })}
    </div>
  );
};

export default Movies;
