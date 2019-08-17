import React, { useState } from 'react';
import { graphql, compose } from 'react-apollo';
import { movieQuery, deleteMovie, updateMovie } from '../queries/queries';


console.log(movieQuery);

function AddMovieModal(props) {
  // const [createMovieState, setCreateMovieState] = useState({
  //   title: '',
  //   year: '',
  //   creator: '',
  //   genre: '',
  //   synopsis: '',
  //   actorOne: '',
  //   actorTwo: '',
  //   actorThree: '',
  //   actorFour: '',
  //   backgroundImage: '',
  //   poster: '',
  //   src: ''
  // });
  const [createMovieState, setCreateMovieState] = useState({});
  console.log(createMovieState,'hello rukee')

  const saveChanges = () => {
    console.log(createMovieState)
  
   const  variables = {
      title: createMovieState.title,
      year: createMovieState.year,
      poster: createMovieState.poster,
      src: createMovieState.src,
      synopsis: createMovieState.synopsis,
      similarMovies: [createMovieState.similarMovies],
      creator: [createMovieState.createdBy],
      cast:[createMovieState.actorOne,createMovieState.actorTwo,createMovieState.actorThree, createMovieState.actorFour],
      genre:createMovieState.genre,
      backgroundImage: [createMovieState.backgroundImage],
      poster:[createMovieState.poster]
    }

    console.log(variables,'these are the variables')
    // console.log(variables,'hello rukee')
    // props.addMovie({
    //   variables: {
    //     title,
    //     year,
    //     poster,
    //     src,
    //     synopsis,
    //     similarMovies: [createMovieState.similarMovies],
    //     creator: [createMovieState.createdBy],
    //     cast:[createMovieState.cast],
    //     genre:[createMovieState.genre],
    //     backgroundImage: [createMovieState.backgroundImage],
    //     poster:[createMovieState.poster]
    //   }
    // });

    setCreateMovieState({
      title: '',
      year: '',
      creator: '',
      genre: '',
      synopsis: '',
      actorOne: '',
      actorTwo: '',
      actorThree: '',
      actorFour: '',
      backgroundImage: '',
      poster: '',
      src: ''
    });
  };

  const handleChange = event => {
    //alert(event.target.value)

    setCreateMovieState({
      ...createMovieState,
      [event.target.name]: event.target.value
    });
  };
  console.log(createMovieState, 'this is meant to be the state');
  return (
    <>
      {/* <!-- The Modal --> */}
      <div className="container">
        <div className="modal " id="myModal">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              {/*         
          <!-- Modal Header --> */}
              <div className="modal-header">
                <h1 className="modal-title">Modal Heading</h1>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <form
                  className="example container"
                  style={{ marginTop: '20px', maxWidth: '300px' }}
                >
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={createMovieState.title}
                  />
                  <div className="create-flex">
                    <span>Year</span>
                    <input
                      className="input-for-search form-control-plaintext"
                      type="text"
                      placeholder="Year"
                      name="year"
                      onChange={handleChange}
                      value={createMovieState.year}
                    />
                  </div>
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Created By"
                    name="creator"
                    onChange={handleChange}
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    onChange={handleChange}
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Synopsis"
                    name="synopsis"
                    style={{ height: '100px' }}
                    onChange={handleChange}
                  />
                  <div>
                    <p>Cast</p>
                    <div className="cast-div container">
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="actorOne"
                        onChange={handleChange}
                        required
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="actorTwo"
                        onChange={handleChange}
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="actorThree"
                        onChange={handleChange}
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="actorFour"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Background Image...."
                    name="backgroungImage"
                    onChange={handleChange}
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Poster...."
                    name="poster"
                    onChange={handleChange}
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Movie Link...."
                    name="src"
                    onChange={handleChange}
                  />
                </form>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={saveChanges}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default compose(
  graphql(movieQuery, { name: 'movieQuery' }),
  graphql(deleteMovie, { name: 'deleteMovie' }),
  graphql(updateMovie, { name: 'updateMovie' })
)(AddMovieModal);

// export default AddMovieModal;
