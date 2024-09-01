import { Map } from 'immutable';
import { uiReducer } from './uiReducer';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should correctly handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should correctly handle HIDE_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('should correctly handle LOGIN_SUCCESS action', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state.get('isUserLoggedIn')).toBe(true);
  });

  it('should correctly handle LOGIN_FAILURE action', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });

  it('should correctly handle LOGOUT action', () => {
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });
});