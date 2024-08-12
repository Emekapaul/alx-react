import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends Component {

  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotifications has more items than the current one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  onClick = () => {
    console.log('Close button has been clicked');
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        {!displayDrawer && (<div className={css(styles.menuItem)}>Your notifications</div>)}
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
                      markAsRead={this.markAsRead}
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
            <button onClick={this.onClick} className={css(styles.button)} aria-label="Close">
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
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