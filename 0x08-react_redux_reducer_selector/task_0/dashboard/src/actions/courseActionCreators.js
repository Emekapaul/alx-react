import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

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

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectCourse,
    unSelectCourse
  }, dispatch);
};
