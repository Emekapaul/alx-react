import React from "react";
import PropTypes from "prop-types";


export default function NotificationItem({ type = 'default', html, value }) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li dangerouslySetInnerHTML={html} className="dangerous-notification"></li> : null}
        </>
    );
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string,
    value: PropTypes.string,
};