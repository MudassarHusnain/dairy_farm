//client/src/Login.js
import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
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
  componentDidMount() {
    
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
        })
        .catch((error) => {
          console.error(error);
        });
  }
render() {
    const {username, email, password} = this.state
    return (
      <div>
        <h1>Log In</h1>        
        {
          this.state.isLoggedIn?
          <h1>User is logged IN</h1>
          :<h1>User is not Logged In</h1>
        }
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
<button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export default Login;