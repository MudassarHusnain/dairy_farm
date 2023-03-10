//client/src/Signup.js
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      signUp:[]
     };
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
       data.append('password_confirmation',this.state.password_confirmation);
       data.append('email',this.state.email);

    
       fetch('/sign_up', {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
  };
render() {
    const {username, email, password, password_confirmation} = this.state
return (
  <div className='bg-grey'>
      <div className="Auth-form-container">
      <div className='position-absolute top-50 start-50 translate-middle h-25 w-45'>
      
        <h1 className="Auth-form-title">Sign Up</h1>        
<form className="Auth-form" onSubmit={this.handleSubmit}>
<div className="form-group mt-3">
          <input className="form-control mt-1"
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <div className="form-group mt-3">
          <input className="form-control mt-1"
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          </div>
          <div className="form-group mt-3">
          <input  className="form-control mt-1"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          <input
          className="form-control mt-1"
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button placeholder="submit" type="submit" className="btn btn-primary">
            Sign Up
          </button>
       </div>
        </form>
        <div>
        or <Link to='/login'>login</Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Signup;