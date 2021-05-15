import groupBy from 'lodash/groupBy';
import reduce from 'lodash/reduce';
import sortBy from 'lodash/sortBy';

export const audioManufacture = (mp3List) => {
  let groupedButtons = groupBy(mp3List, mp3 => 
    mp3.key[0]
  );
  groupedButtons = reduce(groupedButtons, (result, buttons, indexLetter) => (
    result.concat({ indexLetter: indexLetter, buttonGroup: buttons })
  ), []);
  return sortBy(groupedButtons, 'indexLetter');
}
