import mp3List from '../mp3_list.json';
import React from 'react';

const PhraseButtons = () => {
  console.log(mp3List);

  return <div class="box">
    <button class="phrase">喂</button>
    <audio preload="auto" src="./audio/hello.mp3"></audio>
  </div>
}

export default PhraseButtons;