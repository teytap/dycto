import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
export default function Example() {
  if (propTypes.example && propTypes.exampl.length > 0) {
    return (
      <div className="example">
        <strong>Example:</strong>
        {propTypes.example}
      </div>
    );
  } else {
    return null;
  }
}
