import React from "react";

import Typhography from "@mui/material/Typography";

export default function Synonyms(props) {
  const synonyms = props.synonyms;

  if (synonyms.length > 0) {
    return (
      <div>
        <Typhography sx={{ fontWeight: 'bold', ml: '-12px' }}>Synonyms:</Typhography>
        {synonyms.map((syn, key) => {
          return (
            <Typhography key={key}>{syn}</Typhography>
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}