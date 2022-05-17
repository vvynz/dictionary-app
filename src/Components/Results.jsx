import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

export default function Results(props) {
  const data = props.results;

  if (data) {
    return (
      <div>
        <h4>{data.word}</h4>
        <span>
          {data.phonetics
            .filter(phonetic => {
              return phonetic.audio;
            })
            .map((phonetic, key) => {
              return (
                <div key={key}>
                  <Phonetic phonetic={phonetic} />
                </div>
              )
            })}
        </span>
        {data.meanings.map(function(definition, index) {
          return (
            <div key={index}>
              <Definition definitions={definition} />
            </div>);
        })}
      </div>
    );
  } else {
    return null;
  }
}