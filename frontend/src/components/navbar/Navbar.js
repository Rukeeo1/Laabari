import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { alternateLogin } from '../../actions/index';

function Navbar(props) {
  const loginStatus = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
            Labaari
          </Link>
          <button
            onClick={() => {
              dispatch(alternateLogin());
            }}
          >
            hello + {loginStatus}
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mr-auto"
          id="navbarTogglerDemo01"
        >
          <div className="ml-auto">
            {loginStatus ? (
                 <Link to="/login">
                 {' '}
                 <button className="btn btn-danger navbar-btn">Log Out</button>
               </Link>
            ) : (
              <Link to="/login">
                {' '}
                <button className="btn btn-danger navbar-btn">Sign In</button>
              </Link>
            )}
            {/* <Link to="/login">
              {' '}
              <button className="btn btn-danger navbar-btn">Sign In</button>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// const mapStateToProps = state => {
//   return {
//     loggedInReducer: state.loggedIn
//   };
// };

export default Navbar;
