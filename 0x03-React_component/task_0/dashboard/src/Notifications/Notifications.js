import React from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import NotificationItem from "./NotificationItem";
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";


export default function Notifications({ displayDrawer = true, listNotifications = [] }) {
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
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    html={notification.html}
                    value={notification.value}
                  />
                ))}
              </ul>
            </>
          )}
          <button onClick={onClick} style={buttonStyle} aria-label="Close">
            <img src={close_icon} alt="close_icon" />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

/*
<NotificationItem type="default" value="New course available" />
<NotificationItem type="urgent" value="New resume available" />
<NotificationItem html={{ __html: getLatestNotification() }} />
*/