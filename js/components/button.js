import React, { useEffect, useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';
import { makeStyles } from '@material-ui/core/styles';
import split from 'lodash/split';
import random from 'lodash/random';
import indexOf from 'lodash/indexOf';


const useStyles = makeStyles(_ => ({
  tooltip: {
    maxWidth: 500,
  }
}));

const Button = ({
  phraseKey,
  src,
  text,
  ttp,
  ttpFile,
  setCurrentAudio,
  highlight,
  setCurrentAudioId,
  nickNameFile,
  setRefreshNickName,
  refreshNickName,
  isRefreshNickNameButton
}) => {
  const truncateTtp = truncate(ttp, { length: 2000 });
  const [ttpText, setTtpText] = useState(truncateTtp);
  const [srcFile, setSrcFile] = useState(src);
  const [nickNameList, setNickNameList] = useState([]);
  const buttonHandler = e => {
    const audioSrc = e.target.nextElementSibling.src;

    if (audioSrc) {
      setCurrentAudio(audioSrc);
      setCurrentAudioId(phraseKey);
    }

    if (isRefreshNickNameButton) {
      global.nickNameSrcFileCache = {};
      setRefreshNickName(!refreshNickName)
    }
  }
  const classes = useStyles();
  const buttonClassName = highlight ? 'phrase highlight' : 'phrase';
  const buttonText = () => {
    if (!srcFile || !nickNameFile)
      return text;

    const indexOfSlash = indexOf(srcFile, '/');
    const nickNameButtonText = srcFile[indexOfSlash + 5] + srcFile[indexOfSlash + 6];
    return `${text}@${nickNameButtonText}`;
  }

  useEffect(() => {
    if (ttpFile) {
      fetch(ttpFile)
        .then(r => r.text())
        .then(text => setTtpText(truncate(text, { length: 2000 })));
    }
  }, [])

  useEffect(() => {
    if (nickNameFile && !nickNameList.length) {
      console.log('fetch nick name file');

      if (global.nickNameListCache[nickNameList]) {
        setNickNameList(global.nickNameListCache[nickNameList]);
      } else {
        fetch(nickNameFile)
          .then(r => r.text())
          .then(text => {
            setNickNameList(split(text, "\n"));
            global.nickNameListCache[nickNameList] = split(text, "\n");
            console.log('set NickNameList');
          })
      }
    }
  }, [nickNameFile])

  useEffect(() => {
    let file;

    if (!nickNameFile || !nickNameList.length || srcFile)
      return null;

    console.log('select a nick name');

    if (global.nickNameSrcFileCache[phraseKey]) {
      setSrcFile(global.nickNameSrcFileCache[phraseKey]);
      return null;
    }

    while (!file) {
      const randomNum = random(nickNameList.length);
      file = `audio_nick/${nickNameList[randomNum]}`;
      !file && console.error('Found a invalid nick name file', file);
    }

    setSrcFile(file);
    global.nickNameSrcFileCache[phraseKey] = file;
  }, [nickNameList])

  return <div className="box">
    <Tooltip
      title={<span style={{ fontSize: "min(1.8vmax, 13px)" }}>{phraseKey} {ttpText}</span>}
      classes={{ tooltip: classes.tooltip }}
    >
      <button className={buttonClassName} onClick={buttonHandler}>
        {buttonText()}
      </button>
    </Tooltip>
    <audio preload="auto" src={srcFile}></audio>
  </div>
}

export default Button
