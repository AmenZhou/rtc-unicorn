import React from 'react'
import { playCurrentAudio, stopPreviousAudio } from '../utils/audio_utils';
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';

const Button = ({ phraseKey, src, text, id, ttp }) => {
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    stopPreviousAudio();
    playCurrentAudio(audio)
  }

  const truncateTtp = truncate(ttp, { length: 100 })

  return <div className="box" key={id} >
    <Tooltip title={<span style={{ fontSize: "min(1.7vmax, 12px)"}}>{truncateTtp}</span>}>
      <button className="phrase" onClick={buttonHandler}>{text}</button>
    </Tooltip>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button