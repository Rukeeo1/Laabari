import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { getUsers } from './helper/axios-requests';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get(`http://localhost:3001/api/users`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteUser = id => {
    alert(id);
    const usersAfterDelete = users.filter(user => user._id !== id);
    axios
      .delete(`http://localhost:3001/api/users/${id}`)
      .then(response => {
        console.log(response);
        setUsers(usersAfterDelete);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="modalRegisterForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input
                    type="text"
                    id="orangeForm-name"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-name"
                  >
                    Your name
                  </label>
                </div>
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    id="orangeForm-email"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-email"
                  >
                    Your email
                  </label>
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    id="orangeForm-pass"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="orangeForm-pass"
                  >
                    Your password
                  </label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-deep-orange">Sign up</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href=""
            className="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalRegisterForm"
          >
            Launch Modal Register Form
          </a>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Phone</th> */}
              <th scope="col">Plan</th>
              <th scope="col">Subscription(paid)</th>
              <th scope="col">Actions</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.email}</td>
                  {/* <td>{user.phone}</td> */}
                  <td>{user.date}</td>
                  <td>
                    <i
                      className="fas fa-paint-brush-alt"
                      data-toggle="modal"
                      data-target="#modalRegisterForm"
                    />
                  </td>
                  <td onClick={() => deleteUser(user._id)}>
                    <i
                      className="far fa-trash-alt"
                      // onClick={() => deleteUser(user.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
