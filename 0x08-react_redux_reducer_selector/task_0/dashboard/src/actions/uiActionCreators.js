import { bindActionCreators } from 'redux';
import axios from 'axios';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  }
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  }
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return axios.get('/login-success.json')
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()))

  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,
  }, dispatch);
};