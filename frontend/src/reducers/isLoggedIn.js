const initialState = {
  login: false
}

const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'ALTERNATE_LOGIN_STATUS':
      return !state; 
    default:
      return state;
  }
};


// const loggedInReducer = (state = false, action) => {
//   console.log(initialState)
//   switch (action.type) {
//     case 'ALTERNATE_LOGIN_STATUS':
//       return !state.login; 
//     default:
//       return state;
//   }
// };

export default loggedInReducer;