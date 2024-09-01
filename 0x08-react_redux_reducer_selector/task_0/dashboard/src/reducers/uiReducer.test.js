import { uiReducer } from './uiReducer';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

// 1. Test initial state
describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // 2. Test with an unrelated action (e.g., SELECT_COURSE)
  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  // 3. Test when DISPLAY_NOTIFICATION_DRAWER action is passed
  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };

    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // 4. Test when HIDE_NOTIFICATION_DRAWER action is passed
  it('should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false,
    };

    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // 5. Test when LOGIN_SUCCESS action is passed
  it('should set isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
    };

    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // 6. Test when LOGIN_FAILURE action is passed
  it('should set isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };

    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };

    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  // 7. Test when LOGOUT action is passed
  it('should set isUserLoggedIn to false when LOGOUT action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };

    const action = { type: LOGOUT };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };

    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});