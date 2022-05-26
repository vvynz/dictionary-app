import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

import Card from "@mui/material/Card";
import Typhography from "@mui/material/Typography";

export default function Results(props) {
  const data = props.results;

  if (data) {
    return (
      <Card sx={{ padding: '20px', mb: '20px', mt: '20px' }} elevation={3}>
        <div>
          <Typhography variant="h3" component="div" gutterBottom>{data.word}</Typhography>
          {data.phonetics
            .filter(phonetic => {
              return phonetic.audio;
            })
            .map((phonetic, key) => {
              return (
                // <div key={key}>
                <Phonetic key={key} phonetic={phonetic} />
                // </div>
              )
            })}
          {data.meanings.map(function(definition, index) {
            return (
              <div key={index}>
                <Definition definitions={definition} />
              </div>);
          })}
        </div>
      </Card>
    );
  } else {
    return null;
  }
}