import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import VideoDetails from './components/video-details/VideoDetails';
import MainSection from './components/dashboard/MainSection';
import './App.css';
console.log(AppolloClient, 'hello');

const client = new AppolloClient({
  uri: 'http://localhost:3001/graphql'
});
console.log(client, 'hello rukee');
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App container-fluid">
          <Navbar />
          <Switch>
            {/* <Homepage /> */}
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/videos" component={VideoDetails} />
            <Route path="/dashboard" component={MainSection} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
