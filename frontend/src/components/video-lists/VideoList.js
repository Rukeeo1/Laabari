import React, { useEffect, useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery, deleteMovie } from '../../queries/queries';
import './css/VideoList.css';

function VideoList(props) {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });

  const deleteUser = id => {
    //deletes the data
    props.deleteMovie({
      variables: {
        id: id
      },
      refetchQueries: [{ query: movieQuery }]
    });

    // //filters the movies array and updates the state...
    // const newMovieArray = [...movies];
    // const moviesAfterDelete = newMovieArray.filter(movie => movie._id !== id);
    // console.log(moviesAfterDelete);
    //setMovies(moviesAfterDelete);
  };

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
                    <i className="far fa-trash-alt" />

                    <i
                      className="far fa-edit edit-button"
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

export default compose(
  graphql(movieQuery, { name: 'movieQuery' }),
  graphql(deleteMovie, { name: 'deleteMovie' })
)(VideoList);

//export default graphql(movieQuery)(VideoList);
