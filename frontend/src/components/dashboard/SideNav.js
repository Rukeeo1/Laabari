import React from 'react';
import {Link } from 'react-router-dom';

function SideBar() {
  return (
    <>
      <div className="col-sm-2 sidebar">
        <div>
          <ul className="nav-tabs li-style">
            <li className="nav-item">
              <Link  to="/dashboard/users" className="nav-link" >
                <i className="fas fa-user-secret font-awesome" />
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/videos" className="nav-link" href="menu1">
                <i className="fas fa-file-video font-awesome" />
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab">
                <i className="fas fa-truck-monster font-awesome" />
                Creators
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab">
                <i className="fas fa-chart-line font-awesome" />
                Charts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
