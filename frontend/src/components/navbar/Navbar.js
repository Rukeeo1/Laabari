import React from 'react';
import labaari from './images/labaari.png';

function Navbar() {
  return (
    <div style={{ height: '90px' }}>
      <nav className="navbar navbar-light bg-transparent justify-content-between">
        <a className="navbar-brand">
          <img src={labaari} alt="Logo" style={{ height: '10vh' }} />
        </a>

        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          Sign In
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
