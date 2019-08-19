import React from 'react';
import './css/Dashboard.css';
import Users from '../users-table/Users';
import { Route, Switch } from 'react-router-dom';
import VideoList from '../video-lists/VideoList';
import Sidebar from './SideNav';


function MainSection() {
  return (
    <div className="">
      <div className="row">
        <Sidebar />
        <div className="col-sm-10" style={{ backgroundColor: 'white' }}>
          <Switch>
            <Route exact path="/dashboard/users" component={Users} />
            <Route exact path="/dashboard/videos" component={VideoList} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
