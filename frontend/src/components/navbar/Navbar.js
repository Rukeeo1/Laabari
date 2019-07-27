import React from 'react';
import labaari from './images/labaari.png';

function Navbar() {
  return (
    // <div style={{ height: '90px' }}>
    //   <nav className="navbar navbar-light bg-transparent justify-content-between">
    //     <a className="navbar-brand">
    //       <img src={labaari} alt="Logo" style={{ height: '10vh' }} />Labaari
    //     </a>

    //     <button className="btn btn-outline-danger my-2 my-sm-0" style={{ height: '8vh',fontWeight:'bold'}}type="submit">
    //       Sign In
    //     </button>
    //   </nav>
    // </div>
    // pulled out navbar dark from navbar
    <nav class="navbar navbar-expand-md navbar-dark">
      <a class="navbar-brand" href="#">
       <h1 style={{color:"red",fontSize:"4rem"}}>Labaari</h1> 
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="collapsibleNavbar"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
