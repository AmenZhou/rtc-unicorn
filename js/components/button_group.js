import React from 'react'
import Button from './button';

const ButtonGroup = ({ indexLetter, buttons }) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{indexLetter}</div>
    {
      buttons.map(({ src, title, id, key }) => <Button phraseKey={key} id={id} src={src} text={title} />)
    }
  </div>
)

export default ButtonGroup;