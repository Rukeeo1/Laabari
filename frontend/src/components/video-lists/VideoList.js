import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const movieQuery = gql`
  {
    movies {
      _id
      title
      similarMovies
      year
      synopsis
      creator
      genre
    }
  }
`;

function VideoList(props) {
  const deleteUser = (id) => {
    alert(id)
  };
  const [movies, setMovies] = useState('');

  useEffect(() => {
    setMovies(props.data.movies);
  });

  if (!movies) {
    return '';
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>

              <th scope="col">Year</th>
              <th scope="col">Created By</th>
              <th scope="col">Genre</th>
              <th scope="col">Actions</th>

              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                  <td>{movie.creator[0]}</td>
                  <td>{movie.genre}</td>
                  <td onClick={() => deleteUser(movie._id)}>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => deleteUser(movie._id)}
                    />
                    <i
                      className="fas fa-paint-brush-alt"
                      data-toggle="modal"
                      data-target="#modalRegisterForm"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default graphql(movieQuery)(VideoList);
