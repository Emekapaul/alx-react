import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr className={css(isHeader ? styles.trueHeader : styles.falseHeader)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.thElement)}>{textFirstCell}</th>
            <th className={css(styles.thElement)}>{textSecondCell}</th>
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

const styles = StyleSheet.create({
  trueHeader: {
    backgroundColor: '#deb5b545'
  },

  falseHeader: {
    backgroundColor: '#f5f5f5ab'
  },

  thElement: {
    textAlign: 'left'
  }
})
