import React from "react";

import Typhography from "@mui/material/Typography";

export default function Synonyms(props) {
  const synonyms = props.synonyms;

  if (synonyms.length > 0) {
    return (
      <ul className="synonyms">
        <Typhography sx={{ fontWeight: 'bold' }}>Synonyms:</Typhography>
        {synonyms.map((syn, key) => {
          return (
            <li key={key}>{syn}</li>
          )
        })}
      </ul>
    );
  } else {
    return null;
  }
}