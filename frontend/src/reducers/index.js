import { combineReducers } from 'redux';
import loggedInReducer from './isLoggedIn';

//holds all the necessary reducers this app might need
const rootReducer = combineReducers({
  isLoggedIn: loggedInReducer
});

export default rootReducer;
