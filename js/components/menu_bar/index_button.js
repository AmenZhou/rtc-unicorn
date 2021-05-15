import React from 'react'
import map from '../../../config/index_key_name_map.json';

const IndexButton = ({ indexLetter }) => (
  <div>
    <div className="index-letter-box">{indexLetter} {map[indexLetter.toUpperCase()]}</div>
  </div> 
)

export default IndexButton;