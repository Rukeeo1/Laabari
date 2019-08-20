const initialState = {
  login: false,
  userEmail: ""

};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALTERNATE_LOGIN_STATUS':
      return {
        ...state,
        login: !state.login
      };
    case 'USER_EMAIL':
      return{
        ...state,
       userEmail : action.payload
      }
    default:
      return state;
  }
};

export default loggedInReducer;
