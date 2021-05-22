import React from 'react'
import Button from './button';
import map from '../../config/index_key_name_map_short.json';

const ButtonGroup = ({ indexLetter, buttons }) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{indexLetter} {map[indexLetter.toUpperCase()]}</div>
    {
      buttons.map(({ src, title, id, key, ttp }) => <Button phraseKey={key} id={id} src={src} text={title} ttp={ttp} />)
    }
  </div>
)

export default ButtonGroup;