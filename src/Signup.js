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
      errors: ''
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
      <div>
        <h1>Sign Up</h1>        
<form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
       
        </form>
        <div>
        or <Link to='/login'>login</Link>
      </div>
      </div>
    );
  }
}
export default Signup;