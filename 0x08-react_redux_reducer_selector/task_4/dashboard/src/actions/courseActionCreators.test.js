import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
  const expectedData = {
    type: SELECT_COURSE,
    index: 1,
  };

  const actionData = selectCourse(1);
  expect(actionData).toEqual(expectedData);
});


test('Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }', () => {
  const expectedData = {
    type: UNSELECT_COURSE,
    index: 1,
  }

  const actionData = unSelectCourse(1);
  expect(actionData).toEqual(expectedData);
});
