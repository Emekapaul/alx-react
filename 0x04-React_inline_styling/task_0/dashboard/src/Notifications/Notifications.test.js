import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from './Notifications';

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: '<u>test</u>' } }
];


describe('Notifications component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Notifications />);
    expect(container).toBeInTheDocument();
  });

  test('renders NotificationItem elements', () => {
    const { container } = render(<Notifications listNotifications={listNotifications} />);
    const listItems = container.querySelectorAll('.Notifications ul li');
    expect(listItems.length).toBeGreaterThan(0);
  });

  test('renders the text "Here is the list of notifications" when listNotifications is not empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const textElement = screen.getByText('Here is the list of notifications');
    expect(textElement).toBeInTheDocument();
  });

  test('renders the text "No new notification for now" when listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} />);
    const textElement = screen.getByText('No new notification for now');
    expect(textElement).toBeInTheDocument();
  });

  test('renders the correct HTML for the first NotificationItem', () => {
    const { container } = render(<Notifications listNotifications={listNotifications} />);
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

  test('renders correctly when a list of notification is passed', () => {
    const { container } = render(<Notifications listNotifications={listNotifications} />);
    const listElement = container.querySelectorAll('ul li');
    const listLength = listNotifications.length;
    expect(listElement.length).toBe(listLength);
  })

  test('the text "Here is the list of notifications" is not displayed when listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const textElement = screen.queryByText('Here is the list of notifications');
    expect(textElement).not.toBeInTheDocument();
  });

  test('renders the text "No new notification for now" when listNotifications is empty', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const textElement = screen.getByText('No new notification for now');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Notification Component(mockup)', () => {
  let initialListNotifications;

  beforeEach(() => {
    initialListNotifications = [
      { id: 4, type: 'default', value: 'Notification 4' },
      { id: 5, type: 'urgent', value: 'Notification 5' },
    ];
  });

  test('does not rerender when updating props with the same list', () => {
    const { rerender } = render(
      <Notifications listNotifications={initialListNotifications} />
    );

    // Spy on the render method of the Notifications component
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    // Rerender with the same props
    rerender(<Notifications listNotifications={initialListNotifications} />);

    // Expect render not to be called again
    expect(renderSpy).not.toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  test('rerenders when updating props with a longer list', () => {
    const { rerender } = render(
      <Notifications listNotifications={initialListNotifications} />
    );

    // Spy on the render method of the Notifications component
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    // Rerender with a longer list
    const longerListNotifications = [
      ...initialListNotifications, ...listNotifications
    ];
    rerender(<Notifications listNotifications={longerListNotifications} />);

    // Expect render to be called again
    expect(renderSpy).toHaveBeenCalled();
    renderSpy.mockRestore();
  });

  test('markAsRead calls console.log with correct message', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    const notificationItem = screen.getByText('New course available');
    fireEvent.click(notificationItem);

    expect(logSpy).toHaveBeenCalledWith(`Notification 1 has been marked as read`);
    logSpy.mockRestore();
  });
});
