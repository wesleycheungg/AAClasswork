import React from 'react';
import ReactDOM from 'react-dom';
import {
    Signup,
    Login,
    Logout
} from '../frontend/util/session_api_util'

document.addEventListener("DOMContentLoaded",() => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>hey</h1>, root)
  
  window.Signup = Signup
  window.Login = Login
  window.Logout = Logout
})