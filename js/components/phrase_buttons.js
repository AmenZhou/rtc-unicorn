import React from 'react';
import ButtonGroup from './button_group';
import { audioManufacture } from '../utils/button_utils';

const PhraseButtons = ({ mp3List, selectedGroup, setCurrentAudio }) => (
  <div className="phrase-buttons">
    {
      audioManufacture(mp3List).filter(({ indexLetter }) => {
        if(selectedGroup === 'ALL') return true;
        return selectedGroup === indexLetter
      }).map(({ indexLetter, buttonGroup }) => (
        <ButtonGroup indexLetter={indexLetter} buttons={buttonGroup} setCurrentAudio={setCurrentAudio} key={Math.floor(Math.random() * 10000)} />
      ))
    }
  </div>
)

export default PhraseButtons;