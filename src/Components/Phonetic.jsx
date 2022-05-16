import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log("Phonetics", props.phonetic);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank">Listen</a>
      {props.phonetic.text}
    </div>
  );
}