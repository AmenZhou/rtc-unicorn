import React, { useState } from 'react'
import { playCurrentAudio, stopPreviousAudio } from '../utils/audio_utils';
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    maxWidth: 500,
  }
}));

const Button = ({ phraseKey, src, text, id, ttp, ttpFile }) => {
  const truncateTtp = truncate(ttp, { length: 2000 });
  const [ttpText, setTtpText] = useState(truncateTtp);
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    stopPreviousAudio();
    playCurrentAudio(audio);
  }
  const classes = useStyles();

  if (ttpFile) {
    fetch(ttpFile)
      .then(r => r.text())
      .then(text => setTtpText(truncate(text, { length: 2000 })))
  }

  return <div className="box" key={`${phraseKey}/${id}`} >
    <Tooltip
      title={<span style={{ fontSize: "min(1.8vmax, 13px)"}}>{ttpText}</span>}
      placement="right"
      classes={{ tooltip: classes.tooltip }}
    >
      <button className="phrase" onClick={buttonHandler}>{text}</button>
    </Tooltip>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button