import React from "react";
import ReactAudioPlayer from "react-audio-player";

import Typhography from "@mui/material/Typography";

export default function Phonetic(props) {
  const phonetic = props.phonetic;

  return (
    <div className="phonetic">
      <ReactAudioPlayer
        src={phonetic.audio}
        controls
      />
      <Typhography variant="subtitle1" sx={{ m: '7px', fontWeight: '500' }}>{phonetic.text}</Typhography>
    </div>
  );
}