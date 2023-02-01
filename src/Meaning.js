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
              <hr />
              <p>
                <span className="definition--word">Definition:</span>
                {definition.definition}
              </p>

              <div>
                <Example example={definition.example} />
              </div>

              <div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        })}
        <div className="logo2 text-end">
          <img src="../images/book-sub.png" alt="dictionary-logo" width="50" />
        </div>
      </section>
    </div>
  );
}
