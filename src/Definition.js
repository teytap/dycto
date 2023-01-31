import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
export default function Definition(props) {
  if (props.definition) {
    // console.log(props.definition.phonetics);

    return (
      <div className="definition">
        <section>
          <h1 className="word">{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetics} />
          {/* {props.definition.phonetics.map((phonetic, i) => {
            return (
              <div key={i}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })} */}
        </section>
        <br />
        {props.definition.meanings.map((meaning, i) => {
          return (
            <div key={i}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        {/* <Meaning meaning={props.definition.meanings} /> */}
      </div>
    );
  } else {
    return null;
  }
}
