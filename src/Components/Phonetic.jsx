import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  const phonetic = props.phonetic;

  return (
    <div>
      <ReactAudioPlayer
        src={phonetic.audio}
        controls
      />
    </div>
  );
}