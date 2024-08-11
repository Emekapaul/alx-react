import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const rowStyle = { backgroundColor: isHeader ? "#deb5b545" : '#f5f5f5ab' }
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan={2}>{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
