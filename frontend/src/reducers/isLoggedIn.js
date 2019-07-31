const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'ALTERNATE_LOGIN_STATUS':
      return !state; 
    default:
      return state;
  }
};
console.log('i checked this file')
export default loggedInReducer;