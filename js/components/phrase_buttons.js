import React from 'react';
import ButtonGroup from './button_group';
import { audioManufacture } from '../utils/button_utils';

const PhraseButtons = ({ mp3List }) => (
  audioManufacture(mp3List).map(({ indexLetter, buttonGroup }) => (
    <ButtonGroup indexLetter={indexLetter} buttons={buttonGroup} />
  ))
)

export default PhraseButtons;