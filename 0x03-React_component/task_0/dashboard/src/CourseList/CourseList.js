import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import './CourseList.css';

export default function CourseList({ listCourses = [] }) {
  return (
    <table id="CourseList">
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

/*
<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
<CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
<CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
*/
