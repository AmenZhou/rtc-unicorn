import React, { useState } from 'react'
import { playCurrentAudio, stopPreviousAudio } from '../utils/audio_utils';
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';

const Button = ({ phraseKey, src, text, id, ttp, ttpFile }) => {
  const truncateTtp = truncate(ttp, { length: 500 });
  const [ttpText, setTtpText] = useState(truncateTtp);
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    stopPreviousAudio();
    playCurrentAudio(audio);
  }

  if (ttpFile) {
    fetch(ttpFile)
      .then(r => r.text())
      .then(text => setTtpText(truncate(text, { length: 500 })))
  }

  return <div className="box" key={`${phraseKey}/${id}`} >
    <Tooltip title={<span style={{ fontSize: "min(1.7vmax, 12px)"}}>{ttpText}</span>}>
      <button className="phrase" onClick={buttonHandler}>{text}</button>
    </Tooltip>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button