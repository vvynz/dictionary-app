import React from "react";
import Definition from "./Definition";

export default function Results(props) {
  console.log("PROPS =", props.results);
  const data = props.results;

  if (data) {
    return (
      <div>
        <h4>{data.word}</h4>
        <span>
          <small>{data.phonetic}</small>
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