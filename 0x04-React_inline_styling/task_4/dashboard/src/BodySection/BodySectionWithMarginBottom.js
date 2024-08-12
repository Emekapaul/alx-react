import React from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";
// import './BodySectionWithMarginBottom.css';

export default function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
});