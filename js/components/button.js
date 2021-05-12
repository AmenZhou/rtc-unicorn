import React from 'react'
import { playCurrentAudio, stopPreviousAudio } from '../utils/audio_utils';

const Button = ({ phraseKey, src, text, id }) => {
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    stopPreviousAudio();
    playCurrentAudio(audio)
  }

  return <div className="box" key={id} >
    <button className="phrase" onClick={buttonHandler}>{phraseKey}&nbsp;&nbsp;{text}</button>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button