import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { alternateLogin } from '../../actions/index';

function Navbar(props) {
  const loginStatus = useSelector(state => state.isLoggedIn);
  console.log(loginStatus);
  const dispatch = useDispatch();
  // const loginStatus = true
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
            hello
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
            {props.loggedInReducer ? (
              ''
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

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    loggedInReducer: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
