import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Navbar />
        <Switch>
          {/* <Homepage /> */}
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
