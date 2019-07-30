const loggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'ALTERNATE_LOGIN_STATUS':
      return !state;
    default:
      return state;
  }
};

export default loggedInReducer;