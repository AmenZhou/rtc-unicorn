import React from 'react'
import Button from './button';

const ButtonGroup = ({ indexLetter, buttons }) => (
  <div className="group" key={indexLetter}>
    {
      buttons.map(({ src, title, id }) => <Button key={id} src={src} text={title} />)
    }
  </div>
)

export default ButtonGroup;