import { v4 as uuidv4 } from 'uuid';

export const randomKey = () => uuidv4();

export const readJsonFile = ({ filePath, setFunc }) =>
  fetch(filePath, { cache: "no-store" })
    .then(r => r.text())
    .then(text => { setFunc(JSON.parse(text)) });

export const getButtonId = ({ key, src, nick_name_file }) => {
  let id = !!src ? `${key}-${src}` : key;
  id = !!nick_name_file ? `${id}-${nick_name_file}` : id;
  return id;
}
