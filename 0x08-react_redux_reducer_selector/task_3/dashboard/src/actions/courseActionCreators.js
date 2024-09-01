import { bindActionCreators } from 'redux';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  }
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  }
}

export function fetchCourseSuccess(courses) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courses,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectCourse,
    unSelectCourse,
    fetchCourseSuccess,
  }, dispatch);
};
