import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  tooltip: {
    maxWidth: 500,
  }
}));

const Button = ({ phraseKey, src, text, ttp, ttpFile, setCurrentAudio, highlight }) => {
  const truncateTtp = truncate(ttp, { length: 2000 });
  const [ttpText, setTtpText] = useState(truncateTtp);
  const buttonHandler = e => {
    const audioSrc = e.target.nextElementSibling.src;

    setCurrentAudio(audioSrc);
  }
  const classes = useStyles();
  const buttonClassName = highlight ? 'phrase highlight' : 'phrase';

  if (ttpFile) {
    fetch(ttpFile)
      .then(r => r.text())
      .then(text => setTtpText(truncate(text, { length: 2000 })))
  }

  return <div className="box">
    <Tooltip
      title={<span style={{ fontSize: "min(1.8vmax, 13px)"}}>{phraseKey} {ttpText}</span>}
      classes={{ tooltip: classes.tooltip }}
    >
      <button className={buttonClassName} onClick={buttonHandler}>
        {text}
      </button>
    </Tooltip>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button
