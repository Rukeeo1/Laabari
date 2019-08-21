import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { alternateLogin, updateUserEmail } from '../../actions/index';
import '../navbar/css/Navabar.css';

function Navbar(props) {
  let loginStatus = useSelector(state => state.isLoggedIn.login);
  const user =  useSelector(state => state.isLoggedIn.userEmail).email;
  console.log(user)
  const dispatch = useDispatch();
 const [userLocalStorage, setUserLocal] = useState(user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserLocal(user);
  }, []);
console.log(userLocalStorage,'helo')

  // const getUserEmail = () => {
  //   if (user) {
  //     return <h1>{user.email}</h1>;
  //   }else{
  //     return '';
  //   }
  // };

  const logOut = () => {
    alert('hello');
    localStorage.removeItem('user');
    // setUser('');
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent personal-styles"
        style={{ height: '65px' }}
      >
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
            Labaari
          </Link>
          <button
            onClick={() => {
              dispatch(alternateLogin());
              dispatch(updateUserEmail(''))

            }}
          >
            hello + {loginStatus}
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mr-auto"
          id="navbarTogglerDemo01"
        >
          <div className="ml-auto" style={{ color: 'white' }}>
            {user? user : ''}
            {/* {getUserEmail()} */}
          </div>
          <div className="ml-auto">
            {user ? (
              <Link to="/login">
                {' '}
                <button className="btn btn-danger navbar-btn" onClick={logOut}  >
                  Log Out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                {' '}
                <button className="btn btn-danger navbar-btn">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
