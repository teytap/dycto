import React from "react";
export default function Synonyms(props) {
  console.log(props.example);
  return (
    <div className="Synonyms">
      {props.synonyms.map((synonym, i) => {
        return (
          <ul key={i}>
            <li>
              <strong>Synoym:</strong>
              {synonym}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
