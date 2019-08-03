import React, { useEffect, useState } from 'react';
import axios from 'axios';
//do an axios request to get all users...
//when it shows up set the state this niggar is going to loop through
//map through that array and append the data to the table....
// how does your search come in, i am not sure....

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //going to call a get users function here?
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get('http://localhost:3001/api/users')
      .then(response => {
        console.log(response.data, 'this is the data i am looking for');
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <div
          class="modal fade"
          id="modalRegisterForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <i class="fas fa-user prefix grey-text" />
                  <input
                    type="text"
                    id="orangeForm-name"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="orangeForm-name"
                  >
                    Your name
                  </label>
                </div>
                <div class="md-form mb-5">
                  <i class="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    id="orangeForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="orangeForm-email"
                  >
                    Your email
                  </label>
                </div>

                <div class="md-form mb-4">
                  <i class="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    id="orangeForm-pass"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="orangeForm-pass"
                  >
                    Your password
                  </label>
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-deep-orange">Sign up</button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a
            href=""
            class="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalRegisterForm"
          >
            Launch Modal Register Form
          </a>
        </div>
 
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Subscription(paid)</th>
            <th scope="col">Actions</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.email}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <i class="fas fa-paint-brush-alt" />
                  </td>
                  <td>
                    <i
                      class="far fa-trash-alt"
                      data-toggle="modal"
                      data-target="#modalRegisterForm"
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Users;
