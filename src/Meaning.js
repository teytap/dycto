import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map((definition, i) => {
          return (
            <div key={i}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
              </p>
              <br />
              <div>
                <Example example={definition.example} />
              </div>
              <br />
              <div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
