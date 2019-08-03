import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <>
      <div className="col-sm-3 sidebar">
        <div>
          <ul className="nav-tabs">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#home">
                <i className="fas fa-user-secret font-awesome" />
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="menu1">
                <i className="fas fa-file-video font-awesome" />
                Videos
              </a>
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
