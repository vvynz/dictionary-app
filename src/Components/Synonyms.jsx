import React from "react";

export default function Synonyms(props) {
  const synonyms = props.synonyms;

  if (synonyms.length > 0) {
    return (
      <div>
        <strong>Synonyms:</strong>
        {synonyms.map((syn, key) => {
          return (
            <span key={key}>{syn}</span>
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}