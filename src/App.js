//client/src/App.js
import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter,Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import FrontPage from './FrontPage';
import Addanimal from './Addanimal';
import { Navigate } from "react-router-dom";
import DetailPage from './DetailPage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
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
  
  render() {
    return (
      <div>
      
         <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/frontPage' element={<FrontPage/>}/>
            <Route exact path='/addAnimal' element={<Addanimal/>}/>
            <Route exact path='/detail' element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}
export default App;