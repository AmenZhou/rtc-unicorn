import React from 'react'
import Button from './button';
import map from '../../config/index_key_name_map_short.json';
import { randomKey } from '../utils/common_utils';

const ButtonGroup = ({ indexLetter, buttons, setCurrentAudio }) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{map[indexLetter.toUpperCase()]}</div>
    {
      buttons.map(({ src, title, id, key, ttp, ttp_file }) =>
        <Button
          key={randomKey()}
          phraseKey={key}
          id={id}
          src={src}
          text={title}
          ttp={ttp}
          ttpFile={ttp_file}
          setCurrentAudio={setCurrentAudio}
        />
      )
    }
  </div>
)

export default ButtonGroup;