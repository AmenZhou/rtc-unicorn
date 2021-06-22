import { v4 as uuidv4 } from 'uuid';

export const randomKey = () => uuidv4();

export const readJsonFile = ({ filePath, setFunc }) =>
  fetch(filePath, { cache: "no-store" })
    .then(r => r.text())
    .then(text => { setFunc(JSON.parse(text)) });
