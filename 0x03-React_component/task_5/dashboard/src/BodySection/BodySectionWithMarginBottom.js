import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';

export default function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = BodySection.propTypes;