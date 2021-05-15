import femaleVoiceMp3 from '../../config/mp3_female.json';
import maleVoiceMp3 from '../../config/mp3_male.json';
import React from 'react';
import ButtonGroup from './button_group';
import { audioManufacture } from '../utils/button_utils';

const PhraseButtons = ({ voiceType }) => {
  let mp3List;

  if (voiceType === 'MALE') {
     mp3List = maleVoiceMp3;
  } else if (voiceType === 'FEMALE') {
     mp3List = femaleVoiceMp3;
  } else {
    throw "Unknown voice type";
  }

  return audioManufacture(mp3List).map(({ indexLetter, buttonGroup }) => (
    <ButtonGroup indexLetter={indexLetter} buttons={buttonGroup} />
  ));
}

export default PhraseButtons;