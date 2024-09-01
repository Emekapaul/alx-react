// notificationReducer.test.js
import {
  notificationReducer
} from './notificationReducer';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

// Sample data to use in tests
const notifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", value: "New data available" }
];

describe('notificationReducer', () => {

  // Test that the default state returns the expected initial state
  it('should return the default state', () => {
    const expectedState = {
      notifications: [],
      filter: NotificationTypeFilters.DEFAULT,
    };
    expect(notificationReducer(undefined, {})).toEqual(expectedState);
  });

  // Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  // Test that MARK_AS_READ returns the data with the right item updated
  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  // Test that SET_TYPE_FILTER returns the data with the filter updated
  it('should handle SET_TYPE_FILTER', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };

    const expectedState = {
      filter: NotificationTypeFilters.URGENT,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

});
