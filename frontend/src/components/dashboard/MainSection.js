import React from 'react';
import './css/Dashboard.css';
import Users from '../users-table/Users'
import { Route, Link } from 'react-router-dom'
import Sidebar from './SideNav'

function MainSection() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        {/* <div className="col-sm-3 sidebar">
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
        </div> */}
        <div className="col-sm-9" style={{ backgroundColor: 'white' }}>
          {/* <div className="tab-content"> */}
            {/* <div className="tab-pane container active" id="home">
              <div
                className="card card-deck"
                style={{ width: '210px', margin: '4px' }}
              >
                <img
                  className="card-img-top"
                  src="https://img.yts.lt/assets/images/movies/Dark_Angel_1990/medium-cover.jpg"
                  alt="Card"
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <Route to="/dashboard/users" component={Users}/>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
