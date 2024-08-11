import React, { memo } from "react";
import PropTypes from "prop-types";

function NotificationItem({ id, type = 'default', html, value, markAsRead = () => { } }) {
  return (
    <>
      {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
      {html ? <li onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html} className="dangerous-notification"></li> : null}
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