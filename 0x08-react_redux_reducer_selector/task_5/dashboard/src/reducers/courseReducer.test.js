import { courseReducer } from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';

// Mock normalized data
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  // Test that the default state returns an empty Map
  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(Map());
  });

  // Test that FETCH_COURSE_SUCCESS returns the normalized data passed
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = Map();
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    // Normalize the action data
    const normalizedData = fromJS(coursesNormalizer(action.data));
    const expectedState = Map({
      1: Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
      2: Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
      3: Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
    });

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  // Test that SELECT_COURSE returns the data with the right item updated
  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      1: Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
      2: Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
      3: Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
    });
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedState = Map({
      1: Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
      2: Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),
      3: Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
    });

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  // Test that UNSELECT_COURSE returns the data with the right item updated
  it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
      1: Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
      2: Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),
      3: Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
    });
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = Map({
      1: Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
      2: Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
      3: Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
    });

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
