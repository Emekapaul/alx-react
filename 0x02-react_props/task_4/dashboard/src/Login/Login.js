import React from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import './Login.css';

export default function Login() {
  return (
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      < input type="email" id="email" name="email" autoComplete="name" />

      <label htmlFor="password">password:</label>
      <input type="password" id="password" name="password" />

      <button>OK</button>
    </div>
  );
}