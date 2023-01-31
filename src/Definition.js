import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="definition">
        <section>
          <h1 className="word">{props.definition.word}</h1>
          {props.definition.phonetics.map((phonetic, i) => {
            return (
              <div key={i}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <br />
        {props.definition.meanings.map((meaning, i) => {
          return (
            <div key={i}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
