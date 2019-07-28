import React from 'react';
import labaari from './images/labaari.png';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" style={{color:'white'}}>
            Labaari
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse mr-auto" id="navbarTogglerDemo01">
          <div className="ml-auto">
            <button class="btn btn-danger navbar-btn">Button</button>
          </div>
        </div>
      </nav>
    </>
  );
}

/**
       <nav class="navbar navbar-expand-md bg-light navbar-dark">
        <a class="navbar-brand" href="#">
          Labaari
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
            {/* <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li> */
//   <button class="btn btn-danger navbar-btn">Button</button>
{
  /* <li class="nav-item">
            <a class="nav-link" href="#">
              Sign Up
            </a>
          </li> */
}
//       <li class="nav-item btn btn-danger navbar-btn">
//         <a class="nav-link" href="#" >
//           Login
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>
// <hr style={{ color: 'white' }} />

export default Navbar;
