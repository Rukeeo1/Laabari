export const alternateLogin = () => {
  return {
    type: 'ALTERNATE_LOGIN_STATUS'
  };
};

export const updateUserEmail = (payload) => {
  console.log('hhhhhhhhh')
  console.log(payload)
  return {
    type: 'USER_EMAIL',
    payload
  };
};
