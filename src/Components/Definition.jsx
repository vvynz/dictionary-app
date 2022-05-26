import React from "react";
import Synonyms from "./Synonyms";

import Typhography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Definition(props) {
  const meaning = props.definitions;
  return (
    <Card sx={{ padding: '30px 20px', mb: '20px', mt: '20px' }} elevation={3}>
      {/* <CardContent> */}
      <Typhography sx={{ fontStyle: 'italic', mt: '-12px', mb: '7px', fontWeight: '700' }}>{meaning.partOfSpeech}</Typhography>
      {meaning.definitions.map(function(definition, index) {
        return (
          <section key={index} className="definition">
            <Typhography sx={{ fontSize: '1.15rem', fontWeight: '400', mb: '10px', ml: '12px' }}>{definition.definition}</Typhography>
            {definition.example ?
              <div>
                <Typhography sx={{ fontSize: '1rem', fontStyle: 'italic', ml: '7px', mb: '20px' }}>"{definition.example}"</Typhography>
              </div> : null}
          </section>
        );
      })}
      <Synonyms synonyms={meaning.synonyms} />
      {/* </CardContent> */}
    </Card>
  );
}