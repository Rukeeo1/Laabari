import React, { useEffect, useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery, deleteMovie, updateMovie } from '../../queries/queries';
import './css/VideoList.css';

function VideoList(props) {
  const [movies, setMovies] = useState('');
  const [idToBeUpdated, setIDToBeUpdated] = useState('');

  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });

  const placeholderValue = (id, index) => {
    alert(index);
    const movieObjectAtThatIndex = movies[index];
    document.getElementById('title').placeholder = movieObjectAtThatIndex.title;
    document.getElementById('movie-year').placeholder =
      movieObjectAtThatIndex.year;
    document.getElementById('created-by').placeholder =
      movieObjectAtThatIndex.creator[0];
    document.getElementById('genre').placeholder = movieObjectAtThatIndex.genre;
    setIDToBeUpdated(id);
  };

  const saveUpdateInfo = () => {
    alert('uuuuu');
    const title =
      document.getElementById('title').value ||
      document.getElementById('title').placeholder;
    const year =
      document.getElementById('movie-year').value ||
      document.getElementById('movie-year').placeholder;
    const createdBy =
      document.getElementById('created-by').value ||
      document.getElementById('created-by').placeholder;
    const genre =
      document.getElementById('genre').value ||
      document.getElementById('genre').placeholder;

    console.log({
      title,
      year,
      creator: [createdBy],
      genre
    });

    console.log(idToBeUpdated, 'this is the id');
    //deletes the data
    props.updateMovie({
      variables: {
        id: idToBeUpdated,
        title,
        year,
        creator: [createdBy],
        genre
      },
      //fetches the query again and updates the dom
      refetchQueries: [{ query: movieQuery }]
    });
  };

  const deleteUser = id => {
    //deletes the data
    props.deleteMovie({
      variables: {
        id: id
      },
      //fetches the query again and updates the dom
      refetchQueries: [{ query: movieQuery }]
    });
  };

  if (!movies) {
    return '';
  }

  console.log(props);

  return (
    <>
      {/* i can do all things through Christ who strengthens me */}

      <div className="modal fade" id="mymodal">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Update Movie Details</h3>
              <br />
            </div>
            <div className="modal-body">
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="form-control"
                required
              />
              <br />
              <input
                type="text"
                id="movie-year"
                placeholder="year"
                className="form-control"
              />
              <br />
              <input
                type="text"
                id="created-by"
                placeholder="Created  By"
                className="form-control"
              />
              <br />

              <input
                type="text"
                id="genre"
                placeholder="Genre"
                className="form-control"
              />
              <br />
            </div>
            <div className="modal-footer">
              <button id="" className="btn btn-primary" data-dismiss="modal">
                Close
              </button>
              <button
                id="submitButton"
                className="btn btn-primary"
                onClick={() => saveUpdateInfo()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
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
                  </td>
                  <td onClick={() => placeholderValue(movie._id, index)}>
                    <i
                      className="far fa-edit edit-button"
                      data-toggle="modal"
                      data-target="#mymodal"
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
  graphql(deleteMovie, { name: 'deleteMovie' }),
  graphql(updateMovie, { name: 'updateMovie' })
)(VideoList);
