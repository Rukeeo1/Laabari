import React from 'react';

function AddMovieModal() {
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
                  />
                  <div className="create-flex">
                    <span>Year</span>
                    <input
                      className="input-for-search form-control-plaintext"
                      type="text"
                      placeholder="Year"
                      name="title"
                    />
                  </div>
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Created By"
                    name="title"
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Genre"
                    name="title"
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Synopsis"
                    name="title"
                    style={{ height: '100px' }}
                  />
                  <div>
                    <p>Cast</p>
                    <div className="cast-div container">
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="title"
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="title"
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="title"
                      />
                      <input
                        className="input-for-search form-control-plaintext"
                        type="text"
                        placeholder="Actor as ...."
                        name="title"
                      />
                    </div>
                  </div>
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Background Image...."
                    name="title"
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Poster...."
                    name="title"
                  />
                  <input
                    className="input-for-search form-control-plaintext"
                    type="text"
                    placeholder="Movie Link...."
                    name="title"
                  />
                  a
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
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
                  <button type="button" className="btn btn-primary">
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

export default AddMovieModal;
