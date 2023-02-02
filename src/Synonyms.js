import React from "react";
export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.map((synonym, i) => {
        return (
          <ul key={i}>
            <li>
              <strong>Synoym: </strong>
              {synonym}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
