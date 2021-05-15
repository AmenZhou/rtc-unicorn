import React from 'react'
import Button from './button';
import map from '../../config/index_key_name_map.json';

const ButtonGroup = ({ indexLetter, buttons }) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{indexLetter} {map[indexLetter.toUpperCase()]}</div>
    {
      buttons.map(({ src, title, id, key }) => <Button phraseKey={key} id={id} src={src} text={title} />)
    }
  </div>
)

export default ButtonGroup;