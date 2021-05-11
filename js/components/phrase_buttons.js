import mp3List from '../../mp3_list.json';
import React from 'react';
import groupBy from 'lodash/groupBy';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';
import ButtonGroup from './button_group';

const PhraseButtons = () => {
  let groupedButtons = groupBy(mp3List, mp3 => 
    mp3.key[0]
  );
  groupedButtons = reduce(groupedButtons, (result, buttons, indexLetter) => (
    result.concat({ indexLetter: indexLetter, buttonGroup: buttons })
  ), []);
  groupedButtons = sortBy(groupedButtons, 'indexLetter');

  console.log(groupedButtons);
  return groupedButtons.map(({ indexLetter, buttonGroup }) => (
    <ButtonGroup indexLetter={indexLetter} buttons={buttonGroup} />
  ));
}

export default PhraseButtons;