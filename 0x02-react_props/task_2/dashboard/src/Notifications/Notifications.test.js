import React from "react";
import { render } from "@testing-library/react";
import Notifications from './Notifications';

describe('Notifications component', () => {
    test('renders without crashing', () => {
        const { container } = render(<Notifications />);
        expect(container).toBeInTheDocument();
    });

    test('renders NotificationItem elements', () => {
        const { container } = render(<Notifications />);
        const listItems = container.querySelectorAll('.Notifications ul li');
        expect(listItems.length).toBeGreaterThan(0);
    });

    test('renders the text "Here is the list of notifications"', () => {
        const { container } = render(<Notifications />);
        const textElement = container.querySelector('p');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveTextContent('Here is the list of notifications');
    });

    test('renders the correct HTML for the first NotificationItem', () => {
        const { container } = render(<Notifications />);
        const notificationItems = container.querySelectorAll('.Notifications ul li');
        const firstNotificationItem = notificationItems[0];
        expect(firstNotificationItem).toHaveAttribute('data-notification-type', 'default');
        expect(firstNotificationItem).toHaveTextContent('New course available');
    });
})