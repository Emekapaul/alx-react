import React from "react";
import { getLatestNotification } from '../utils/utils';
import NotificationItem from "./NotificationItem";
import './Notifications.css';
import close_icon from '../assets/close-icon.png';

export default function Notifications() {
    const buttonStyle = {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 0,
    };

    function onClick() {
        console.log('Close button has been clicked');
    }

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem html={getLatestNotification()} />
            </ul>
            <button onClick={onClick} style={buttonStyle} aria-label="Close">
                <img src={close_icon} alt="close_icon" />
            </button>
        </div>
    );
}