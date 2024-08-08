import React from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default function Footer() {
    return (
    <div className='App-footer'>
        <p>{ getFooterCopy(true)} {getFullYear()}</p>
    </div>
    );
}