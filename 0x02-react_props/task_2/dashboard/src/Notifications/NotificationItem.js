import React from "react";


export default function NotificationItem({ type, html, value }) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li dangerouslySetInnerHTML={{ __html: html }} className="dangerous-notification"></li> : null}
        </>
    );
}