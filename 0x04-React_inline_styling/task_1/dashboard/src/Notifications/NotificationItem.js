import React, { memo } from "react";
import PropTypes from "prop-types";

function NotificationItem({ id, type = 'default', html, value, markAsRead = () => { } }) {
  const dangerousNotification = { color: 'red' };
  const defaultOrUrgent = { color: type === 'default' ? 'blue' : 'red' }

  return (
    <>
      {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type} style={defaultOrUrgent}>{value}</li> : null}
      {html ? <li onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html} style={dangerousNotification}></li> : null}
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

export default memo(NotificationItem);