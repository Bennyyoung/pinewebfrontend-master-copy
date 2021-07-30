import axios from '../axiosConfig';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./Authentication/Logo.png";
import { setCurrentUser } from '../redux/user/user.actions';
import { connect } from 'react-redux';

const Navbar = ({ currentUser, history, setCurrentUser }) => {
  const logOut = event => {
    event.preventDefault();
    axios.post('/logout').then((res) => {
      localStorage.clear();
      setCurrentUser(null);
      history.push('/login')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to=""><img src={Logo} width={30}
            height="50" alt="Logo" className="img-thumbnail" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <button className="btn btn-grey">
                  <Link className="nav-link" aria-current="page" to="/"><span><b>Home</b></span></Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-grey">
                  <Link className="nav-link" to="/fleets">
                    Fleets
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-grey">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </button>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-grey">
                  <Link className="nav-link" to="/support">Support</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-grey">
                  <Link className="nav-link" to="/">Fleets</Link>
                </button>
              </li>
              <li className="nav-item dropdown">
                <button className="btn btn-grey" onClick={logOut}>
                  <Link className="nav-link">
                    Logout
                  </Link>
                </button>
              </li>
            </ul>


          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(mapStateProps, mapDispatchProps)(Navbar));
