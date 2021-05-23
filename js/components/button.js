import React from 'react'
import { playCurrentAudio, stopPreviousAudio } from '../utils/audio_utils';
import Tooltip from '@material-ui/core/Tooltip';

const Button = ({ phraseKey, src, text, id, ttp }) => {
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    stopPreviousAudio();
    playCurrentAudio(audio)
  }

  return <div className="box" key={id} >
    <Tooltip title={<span style={{ fontSize: "min(1.7vmax, 12px)"}}>{ttp}</span>}>
      <button className="phrase" onClick={buttonHandler}>{phraseKey}&nbsp;&nbsp;{text}</button>
    </Tooltip>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button