import React from "react";
import { render, screen } from "@testing-library/react";
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

  test('Displays .menuItem when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const menuItemElement = screen.getByText('Your notifications');
    expect(menuItemElement).toBeInTheDocument();
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    const { container } = render(<Notifications displayDrawer={false} />);
    const divNotificationsEle = container.querySelector('div.Notifications');
    expect(divNotificationsEle).not.toBeInTheDocument();
  });

  test('Displays div.menuItem when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const menuItemElement = screen.getByText('Your notifications');
    expect(menuItemElement).toBeInTheDocument();
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    const divNotificationsEle = container.querySelector('div.Notifications');
    expect(divNotificationsEle).toBeInTheDocument();
  });
});