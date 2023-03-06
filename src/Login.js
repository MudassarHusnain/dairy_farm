//client/src/Login.js
import React, { Component,useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import FrontPage from './FrontPage';
import  secureLocalStorage  from  "react-secure-storage";
import { Navigate } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: '',
      isLoggedIn: false,
      user: {}
     };
  }

  loginStatus = () => {
    axios.get('/logged_in',
    {withCredentials: true})
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user

    })
    console.log(this.state.user)

  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()

    const data=new FormData();
    data.append('username',this.state.username);
    data.append('password',this.state.password);

       fetch('/login', {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        this.setState({isLoggedIn:data.logged_in})
        secureLocalStorage.setItem("login",data.logged_in)
        })
        .catch((error) => {
          console.error(error);
        });
  }
render() {
    const {username, email, password} = this.state
    return (
      <div className="Auth-form-container">
      {console.log(secureLocalStorage.getItem("login"))}
        {secureLocalStorage.getItem('login')?
          <Navigate replace to="/frontPage" />
        : <div className='position-absolute top-50 start-50 translate-middle h-25 w-25' >

         <form className="Auth-form" onSubmit={this.handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
            className="form-control mt-1"
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            className="form-control mt-1"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
         </div>}
      </div>
    );
  }
}
export default Login;