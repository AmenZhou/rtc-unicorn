import groupBy from 'lodash/groupBy';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';
import uniq from 'lodash/uniq';

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

export const getMp3List = ({ voiceType, setMp3List }) => {
  const femaleVoiceMp3  = 'config/mp3_female_short.json';
  const maleVoiceMp3 = 'config/mp3_male_short.json';
  let filePath;

  if (voiceType === 'MALE') {
    filePath = maleVoiceMp3;
  } else if (voiceType === 'FEMALE') {
    filePath = femaleVoiceMp3;
  } else {
    throw "Unknown voice type";
  } 
  
  fetch(filePath, { cache: "no-store" })
    .then(r => r.text())
    .then(text => { console.log(JSON.parse(text)); setMp3List(JSON.parse(text)) });
}
