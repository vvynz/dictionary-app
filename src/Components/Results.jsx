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
        <Definition />
      </div>
    );
  } else {
    return null;
  }
}