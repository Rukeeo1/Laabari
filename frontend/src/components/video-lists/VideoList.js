import React, { useEffect, useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery, deleteMovie } from '../../queries/queries';
import './css/VideoList.css';

function VideoList(props) {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    setMovies(props.movieQuery.movies);
  });

  const saveUpdateInfo = () => {};

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

  return (
    <>
      {/* i can do all things through Christ who strengthens me */}

      <div class="modal fade" id="mymodal">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Update Movie Details</h3>
              <br />
            </div>
            <div class="modal-body">
              <input
                type="text"
                id="Email"
                placeholder="Email"
                class="form-control"
                required
              />
              <br />
              <input
                type="text"
                id="mobile-number"
                placeholder="Mobile Number linked With BVN"
                class="form-control"
              />
              <br />
              <input
                type="text"
                id="bvn"
                placeholder="BVN"
                class="form-control"
              />
              <br />
              <input
                type="date"
                id="date-of-birth"
                placeholder="Email"
                class="form-control"
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="form-control"
              />
              <br />
              <input
                type="password"
                id="confirm-password"
                placeholder="Please Confirm Password"
                class="form-control"
              />
              <br />
            </div>
            <div class="modal-footer">
              <button id="" class="btn btn-primary" data-dismiss="modal">
                Close
              </button>
              <button id="submitButton" class="btn btn-primary">
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
                  <td>
                    <i
                      className="far fa-edit edit-button"
                      // data-toggle="modal"
                      // data-target="#modalContactForm"
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
  graphql(deleteMovie, { name: 'deleteMovie' })
)(VideoList);

//export default graphql(movieQuery)(VideoList);
