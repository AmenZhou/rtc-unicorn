import React from 'react'
import Button from './button';
import { randomKey } from '../utils/common_utils';

const ButtonGroup = ({ indexLetter, buttons, setCurrentAudio, buttonMap, setCurrentAudioId }) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{buttonMap[indexLetter.toUpperCase()]}</div>
    {
      buttons.map(({ src, title, id, key, ttp, ttp_file, highlight }) =>
        <Button
          key={randomKey()}
          phraseKey={key}
          id={id}
          src={src}
          text={title}
          ttp={ttp}
          ttpFile={ttp_file}
          setCurrentAudio={setCurrentAudio}
          highlight={highlight}
          setCurrentAudioId={setCurrentAudioId}
        />
      )
    }
  </div>
)

export default ButtonGroup;
