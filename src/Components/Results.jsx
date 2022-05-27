import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";

import Card from "@mui/material/Card";
import Typhography from "@mui/material/Typography";

export default function Results(props) {
  const data = props.results;

  if (data) {
    return (
      <div>
        <Card sx={{ padding: '20px', mb: '20px', mt: '20px' }} elevation={3}>
          <div className="definition-header">
            <Typhography variant="h3" component="div" gutterBottom>{data.word}</Typhography>
            <Typhography sx={{ mt: '24px', ml: '18px', color: 'secondary.light' }} variant="subtitle1">{data.phonetic}</Typhography>
          </div>
          {data.phonetics
            .filter(phonetic => {
              return phonetic.audio;
            })
            .map((phonetic, key) => {
              return (
                <Phonetic key={key} phonetic={phonetic} />
              )
            })}
        </Card>
        <section>
          {data.meanings.map(function(definition, index) {
            return (
              <div key={index}>
                <Definition definitions={definition} />
              </div>);
          })
          }
        </section>
      </div>
    );
  } else {
    return null;
  }
}