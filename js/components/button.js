import React from 'react'
import { attachSinkId } from '../utils/audio_utils';

const Button = ({ key, src, text }) => {
  const buttonHandler = e => {
    const audio = e.target.nextElementSibling;

    attachSinkId(audio);
    audio.volume = 1;
    audio.play();
  }

  return <div className="box" key={key} >
    <button className="phrase" onClick={buttonHandler}>{text}</button>
    <audio preload="auto" src={src}></audio>
  </div>
}

export default Button