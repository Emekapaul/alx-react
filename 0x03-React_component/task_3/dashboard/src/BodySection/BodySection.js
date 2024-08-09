import React, { Children } from "react";

export default function BodySection({ title, Children = null }) {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {Children}
    </div>
  );
}