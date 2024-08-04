import React from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import './Header.css';

export default function Header() {
    return (
    <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
    </div>
    );
}