import { Map, fromJS } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications'

const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT
});

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = fromJS(notificationsNormalizer(action.data));
      return state.set(
        'notifications',
        normalizedData.getIn(['entities', 'notifications']).map(notification =>
          notification.set('isRead', false)
        )
      );
    }

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default: return state;
  }
}
