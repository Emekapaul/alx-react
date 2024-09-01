import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function NotificationItem({ id, type = 'default', html, value, markAsRead = () => { } }) {
  return (
    <>
      {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type} className={css(type == 'default' ? styles.default : styles.Urgent)}>{value}</li> : null}
      {html ? <li onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html} className={css(type == 'default' ? styles.default : styles.Urgent)}></li> : null}
    </>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media screen and (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    }
  },

  Urgent: {
    color: 'red',
    '@media screen and (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    }
  }
})

export default memo(NotificationItem);