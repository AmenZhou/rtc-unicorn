import React from 'react';
import ButtonGroup from './button_group';
import { audioManufacture } from '../utils/button_utils';

const PhraseButtons = ({ mp3List, selectedGroup }) => (
  <div className="phrase-buttons">
    <h1>講真相語音點播系統</h1>
    {
      audioManufacture(mp3List).filter(({ indexLetter }) => {
        if(selectedGroup === 'ALL') return true;
        return selectedGroup === indexLetter
      }).map(({ indexLetter, buttonGroup }) => (
        <ButtonGroup indexLetter={indexLetter} buttons={buttonGroup} />
      ))
    }
  </div>
)

export default PhraseButtons;