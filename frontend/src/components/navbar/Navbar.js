import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            Labaari
          </a>
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
            <Link to="/login">
              {' '}
              <button className="btn btn-danger navbar-btn">Sign In</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
