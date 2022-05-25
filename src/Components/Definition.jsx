import React from "react";
import Synonyms from "./Synonyms";

import Typhography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Definition(props) {
  const meaning = props.definitions;
  return (
    <CardContent>
      <Typhography sx={{ fontStyle: 'italic', mt: '-12px', mb: '7px', ml: '-12px' }}>{meaning.partOfSpeech}</Typhography>
      {meaning.definitions.map(function(definition, index) {
        return (
          <div key={index} className="definition">
            <Typhography sx={{ fontSize: '1.15rem', fontWeight: '400', mb: '10px', ml: '7px' }}>{definition.definition}</Typhography>
            {definition.example ?
              <div>
                <Typhography sx={{ fontSize: '1rem', fontStyle: 'italic', ml: '7px', mb: '20px' }}>"{definition.example}"</Typhography>
              </div> : null}
          </div>
        );
      })}
      <Synonyms synonyms={meaning.synonyms} />
    </CardContent>
  );
}