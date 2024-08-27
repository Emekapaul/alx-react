import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

test('Calling the creator with `abc@gmail.com` & `123` as argument should \
  return { type: LOGIN, user : { email: abc@gmail.com, password: 123 } }', () => {

  const expectedData = {
    type: LOGIN,
    user: { email: 'abc@gmail.com', password: '123' },
  };

  const actionData = login('abc@gmail.com', '123');
  expect(actionData).toEqual(expectedData);
});

test('Calling the creator should return: { type: LOGOUT }', () => {
  const expectedData = { type: LOGOUT };

  const actionData = logout();
  expect(actionData).toEqual(expectedData);

});

test('Calling the creator should return: { type: DISPLAY_NOTIFICATION_DRAWER }', () => {
  const expectedData = { type: DISPLAY_NOTIFICATION_DRAWER };

  const actionData = displayNotificationDrawer();
  expect(actionData).toEqual(expectedData);

});

test('Calling the creator should return: { type: HIDE_NOTIFICATION_DRAWER }', () => {
  const expectedData = { type: HIDE_NOTIFICATION_DRAWER };

  const actionData = hideNotificationDrawer();
  expect(actionData).toEqual(expectedData);
});
