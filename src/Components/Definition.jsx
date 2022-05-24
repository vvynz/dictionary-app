import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  const meaning = props.definitions;
  return (
    <div>
      <em>{meaning.partOfSpeech}</em>
      {meaning.definitions.map(function(definition, index) {
        return (
          <div key={index} className="definition mb-5">
            <h5>{definition.definition}</h5>
            {definition.example ?
              <div>
                <p>Examples:</p>
                <em>{definition.example}</em>
              </div> : null}
          </div>
        );
      })}
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}