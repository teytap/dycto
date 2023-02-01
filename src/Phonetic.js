import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div>
      {props.phonetic.map((p, i) => {
        if (p.audio && p.audio.length > 0) {
          return (
            <div key={i} className="phonetic pb-4">
              <FontAwesomeIcon
                icon={faVolumeHigh}
                className="icons volume"
              ></FontAwesomeIcon>

              <a
                href={p.audio}
                target="_blank"
                rel="noreferrer"
                className="attribution"
              >
                {p.text}
              </a>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
