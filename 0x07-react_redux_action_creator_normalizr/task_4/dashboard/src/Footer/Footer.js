import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from "../App/AppContext";
import './Footer.css';

export default function Footer() {
    const { user } = useContext(AppContext);
    return (
        <div className='App-footer'>
            {user.isLoggedIn ? (
                <p><a href="">Contact us</a></p>
            ) : (
                <p>{getFooterCopy(true)} {getFullYear()}</p>
            )}
        </div>
    );
}