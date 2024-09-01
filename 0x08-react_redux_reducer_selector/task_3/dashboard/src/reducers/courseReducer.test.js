import { courseReducer } from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  // Test that the default state returns an empty array
  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  // Test that FETCH_COURSE_SUCCESS returns the data passed
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = [];
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  // Test that SELECT_COURSE returns the data with the right item updated
  it('should handle SELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  // Test that UNSELECT_COURSE returns the data with the right item updated
  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});