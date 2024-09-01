import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

test('Calling the creator with 1 as an argument should return: \
    { type: MARK_AS_READ, index: 1 }', () => {

  const expectedData = {
    type: MARK_AS_READ,
    index: 1,
  };

  const actionData = markAsRead(1);
  expect(actionData).toEqual(expectedData);
});

test('Calling the creator with one of the filters from NotificationTypeFilters \
  as an argument should return: { type: SET_TYPE_FILTER, filter: "DEFAULT" }', () => {

  const filter = NotificationTypeFilters.DEFAULT;
  const expectedData = {
    type: SET_TYPE_FILTER,
    filter,
  };

  const actionData = setNotificationFilter(filter);
  expect(actionData).toEqual(expectedData);
});