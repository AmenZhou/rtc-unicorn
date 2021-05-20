import groupBy from 'lodash/groupBy';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';
import uniq from 'lodash/uniq';
import femaleVoiceMp3 from '../../config/mp3_female.json';
import maleVoiceMp3 from '../../config/mp3_male_short.json';

export const audioManufacture = (mp3List) => {
  let groupedButtons = groupBy(mp3List, mp3 => 
    mp3.key[0]
  );
  groupedButtons = reduce(groupedButtons, (result, buttons, indexLetter) => (
    result.concat({ indexLetter: indexLetter, buttonGroup: buttons })
  ), []);
  return sortBy(groupedButtons, 'indexLetter');
}

export const buttonIndexList = (mp3List) => (
  uniq(mp3List.map(({ key }) => key[0])).sort()
)

export const getMp3List = ({ voiceType }) => {
  let mp3List;

  if (voiceType === 'MALE') {
     mp3List = maleVoiceMp3;
  } else if (voiceType === 'FEMALE') {
     mp3List = femaleVoiceMp3;
  } else {
    throw "Unknown voice type";
  }

  return mp3List;
}