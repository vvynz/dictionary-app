import React from "react";

export default function Synonyms(props) {
  console.log("SYN", props.synonyms);

  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map((syn, key) => {
            return (
              <li key={key}>{syn}</li>
            )
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}