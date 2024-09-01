import { Map, fromJS } from 'immutable';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      // Normalize the data and convert it to an Immutable structure
      const normalizedData = fromJS(coursesNormalizer(action.data));
      // Merge normalized data with the current state
      return state.merge(normalizedData.get('entities').get('courses'))
        .map((course) => course.set('isSelected', false));
    }

    case SELECT_COURSE:
      // Use setIn to update the isSelected property of the course
      return state.setIn([String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      // Use setIn to update the isSelected property of the course
      return state.setIn([String(action.index), 'isSelected'], false);

    default: return state;
  }
}
