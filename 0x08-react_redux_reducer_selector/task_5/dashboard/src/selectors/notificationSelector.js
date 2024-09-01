import { createSelector } from 'reselect';

// Step 1: Create a base selector to access the notifications state
//const notificationsState = (state) => state.notifications;
const notificationsState = (state) => state.get('notifications');

// Step 2: Create a selector to get the filter value
export const filterTypeSelected = createSelector(
  notificationsState,
  (notifications) => notifications.get('filter')
);

// New selector to get the notifications Map
export const getNotifications = createSelector(
  notificationsState,
  (notifications) => notifications.get('notifications')
);

// New selector to get the unread notifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);
