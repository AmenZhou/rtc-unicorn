import React from 'react'
import map from '../../../config/index_key_name_map.json';

const IndexButton = ({ indexLetter, setGroup }) => {
  const clickHandler = e => {
    e.preventDefault();
    setGroup(e.target.value);
  }

  return <div>
    <button className="index-letter-selection" value={indexLetter} onClick={clickHandler}>
      {indexLetter} {map[indexLetter.toUpperCase()]}
    </button>
  </div> 
}

export default IndexButton;