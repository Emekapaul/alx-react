import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
//import './CourseList.css';

export default function CourseList({ listCourses = [] }) {
  return (
    <table className={css(styles.CourseList)} id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow isHeader={false} key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  CourseList: {
    border: '2px solid rgb(224, 222, 222)',
    width: '95%',
    marginTop: '30px',
    marginLeft: '50px'
  }
});
