import React,{BrowserRouter as Router} from 'react';
import Navbar from './components/navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Login from './components/login/Login'
import './App.css';

function App() {
  return (
    // <Router>
    <div className="App container-fluid">
      {/* <Navbar/> */}
      <Homepage/>
      <Login />
    </div>
    // </Router>
  );
}

export default App;
