import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formValid } from './helpers/helper';
import './css/SignUp.css';

const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      mobile: null,
      password: null,
      formErrors: {
        email: '',
        mobile: '',
        password: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      //if the formValid function returns true, store the user details in an object

      const userObject = {
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
        plan: 'no plan yet',
        id: Math.trunc(Date.now() + 223 - 45 + Math.random())
      };

      axios
        .post('http://localhost:3000/user', userObject)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('form invalid');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'Please Ensure The Email Address is Valid';
        break;
      case 'mobile':
        formErrors.mobile =
          value.length < 11 && value.length > 0
            ? 'Minimum of 11 digits required'
            : '';
        break;
      case 'password':
        formErrors.password =
          value.length < 6 ? 'password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => {});
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Sign Up</h1>
          {/* form starts here .... */}
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={formErrors.email.length > 0 ? 'error' : null}
                name="email"
                placeholder="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="Email">
              <label htmlFor="email">Mobile Number</label>
              <input
                type="text"
                className={formErrors.mobile.length > 0 ? 'error' : null}
                placeholder="Moblie Number"
                name="mobile"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.mobile.length > 0 && (
                <span className="errorMessage">{formErrors.mobile}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={formErrors.password.length > 0 ? 'error' : null}
                placeholder="Password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>
                Already Have an Account?<Link to="login">Login</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
