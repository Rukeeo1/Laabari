import React, { useEffect, useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery, deleteMovie } from '../../queries/queries';
import './css/VideoList.css';

function VideoList(props) {
  const deleteUser = id => {
  alert(id);
  console.log(id)
 // props.deleteMovie(id)
 props.deleteMovie({
   variables:{
     id:id
   }
 })

  };

  const [movies, setMovies] = useState('');
  console.log(props.deleteMovie)

  useEffect(() => {
    setMovies(props.movieQuery.movies);
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
                    <i className="far fa-trash-alt" />

                    <i
                      class="far fa-edit edit-button"
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
