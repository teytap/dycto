import React from "react";

export default function Example(props) {
  //console.log(props);
  if (props.example && props.example.length > 0) {
    return (
      <div className="example">
        <strong>Example:</strong>"{props.example}"
      </div>
    );
  } else {
    return null;
  }
}
