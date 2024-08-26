import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends PureComponent {

  render() {
    const {
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
      listNotifications,
      markNotificationAsRead } = this.props;

    return (
      <>
        {!displayDrawer && (<div onClick={handleDisplayDrawer} className={css(styles.menuItem)}>Your notifications</div>)}
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p className={css(styles.pElement)}>Here is the list of notifications</p>
                <ul className={css(styles.ulElement)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      markAsRead={markNotificationAsRead}
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                    />
                  ))}
                </ul>
              </>
            )}
            <button onClick={handleHideDrawer} className={css(styles.button)} aria-label="Close">
              <img className={css(styles.img)} src={close_icon} alt="close_icon" />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  listNotifications: [],
  markNotificationAsRead: () => { },
};

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const fadeInOut = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #E05050',
    padding: '1rem',
    position: 'absolute',
    right: '10px',
    overflow: 'hidden',
    '@media screen and (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
      borderStyle: 'none',
    }
  },

  pElement: {
    '@media screen and (max-width: 900px)': {
      fontSize: '20px',
    }
  },

  ulElement: {
    '@media screen and (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      listStyle: 'none'
    }
  },

  button: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    borderStyle: 'none',
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 0,
    ':hover': {
      backgroundColor: 'rgb(224, 222, 222)'
    },
    '@media screen and (max-width: 900px)': {
      //marginRight: '3rem',
      right: '45px',
    }
  },

  img: {
    width: '20px',
    height: '20px'
  },

  menuItem: {
    //textAlign: 'end',
    position: 'absolute',
    right: '10px',
    //float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeInOut, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media screen and (max-width: 900px)': {
      fontSize: '20px',
    }
  },
});