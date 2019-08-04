import axios from 'axios';

export function getUsers() {
  return axios
    .get(`http://localhost:3001/api/users`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
}
