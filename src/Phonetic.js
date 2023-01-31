import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.audio.length > 0) {
    return (
      <div className="phonetic">
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className="icons volume"
        ></FontAwesomeIcon>

        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {props.phonetic.text}
        </a>
      </div>
    );
  } else {
    return null;
  }
}
