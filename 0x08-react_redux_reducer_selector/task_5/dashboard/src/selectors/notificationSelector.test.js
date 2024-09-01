import { fromJS, Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationSelector tests', () => {
  // Mock state for testing
  const state = fromJS({
    notifications: {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: {
        '1': { id: 1, isRead: false, value: 'New course available' },
        '2': { id: 2, isRead: true, value: 'New resume available' },
        '3': { id: 3, isRead: false, value: 'New data available' }
      }
    }
  });

  // Test that filterTypeSelected works as expected
  it('filterTypeSelected should return the correct filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  // Test that getNotifications returns a list of the message entities within the reducer
  it('getNotifications should return the correct list of notifications', () => {
    const notifications = getNotifications(state);
    const expectedNotifications = fromJS({
      '1': { id: 1, isRead: false, value: 'New course available' },
      '2': { id: 2, isRead: true, value: 'New resume available' },
      '3': { id: 3, isRead: false, value: 'New data available' }
    });
    expect(notifications).toEqual(expectedNotifications);
  });

  // Test that getUnreadNotifications returns a list of the unread message entities within the reducer
  it('getUnreadNotifications should return the correct list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    const expectedUnreadNotifications = fromJS({
      '1': { id: 1, isRead: false, value: 'New course available' },
      '3': { id: 3, isRead: false, value: 'New data available' }
    });
    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});
