import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//you license to create a store
import { createStore } from 'redux';
import rootReducer from './reducers/index'; //the store admin...reducer in chief
import { Provider } from 'react-redux'; // let's see this guy like the store website...that provides acess to the store..

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={rootReducer}>
    <App />
  </Provider>,//our app has now been subscribed..go to the page and access the global store
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
