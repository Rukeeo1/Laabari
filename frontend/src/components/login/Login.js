import React from 'react';
import axios from 'axios';
import { formValid } from './helper';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { alternateLogin } from '../../actions/index';
import './css/Login.css';


const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: '',
        mobile: '',
        password: ''
      },
      redirect: false
    };
  }
  //bring in the state...

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      const userEmail = {
        email: this.state.email,
        password: this.state.password
      };
      console.log(userEmail, 'hello oo');

      axios
        .post('http://localhost:3001/api/users/login', userEmail)
        .then(response => {
          console.log(response);
          this.setState({ redirect: true });
          this.props.onLogin();
        })
        .catch(err => {
          console.log(err.message);
          //put a logic to say either user name or password is incorrect...
          this.setState({
            formErrors: {
              email: 'please ensure email is correct',
              password: 'ensure your password is correct'
            }
          });
        });

      //     axios
      //       .get(`http://localhost:3001/api/users/` + userEmail)
      //       .then(response => {
      //         console.log(response);
      //         if (response.data.length === 0) {
      //           this.setState({
      //             formErrors: {
      //               email: 'please ensure email is correct',
      //               password: 'ensure your password is correct'
      //             }
      //           });
      //           return; //this return breaks the function if there are form errors....
      //         }
      //         //you can do a further password check here which i shall skip...

      //         this.setState({ redirect: true });
      //         this.props.onLogin(); //this is tobe called on login sucess
      //         const user = response.data;
      //         console.log(user);
      //         localStorage.setItem('user', JSON.stringify(user)); //store the item in local storage...
      //       })
      //       .catch(error => {
      //         console.log(error.message, 'hello rushed');
      //       });
      //   }
      // };
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
          : 'Please enter a valid email or phone number.';
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
    const loggedIn = this.state.redirect;

    if (loggedIn) {
      return <Redirect to="/videos-gallery" />;
    }

    return (
      <div className="wrapper">
        {/* <NavBar /> */}
        <div className="form-wrapper">
          <h1>Login{this.props.loginStatus ? '' : 'rukee'}</h1>
          {/* form starts here .... */}
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Email">
              <label htmlFor="email" />
              <input
                type="text"
                className={formErrors.email.length > 0 ? 'error' : null}
                name="email"
                placeholder="Email or phone number"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password" />
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
            <div>
              <p>
                <input type="checkbox" style={{ marginRight: '4px' }} />
                Remember Me?
              </p>
              <p>
                <Link to="/">Need Help?</Link>
              </p>
            </div>
            <div className="createAccount">
              <button type="submit">Sign In</button>
              <small>
                New to Laabari?<Link to="/signup"> Sign up now.</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(alternateLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
