import React, { useEffect, useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';
import { makeStyles } from '@material-ui/core/styles';
import split from 'lodash/split';
import random from 'lodash/random';
import indexOf from 'lodash/indexOf';
import { getOneNickNameListFromCache, getOneNickNameSrcFromCache, resetNickNameSrcCache, setOneNickNameListToCache, setOneNickNameSrcToCache } from '../utils/cache';

const useStyles = makeStyles(_ => ({
  tooltip: {
    maxWidth: 500,
  }
}));

const Button = ({
  phraseKey,
  id,
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
      resetNickNameSrcCache();
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

      if (getOneNickNameListFromCache(nickNameFile)) {
        setNickNameList(getOneNickNameListFromCache(nickNameFile));
      } else {
        fetch(nickNameFile)
          .then(r => r.text())
          .then(text => {
            setNickNameList(split(text, "\n"));
            setOneNickNameListToCache({ nickNameFile, list: split(text, "\n") });
          })
      }
    }
  }, [nickNameFile])

  useEffect(() => {
    let file;

    if (!nickNameFile || !nickNameList.length || srcFile)
      return null;

    console.log('select a nick name');

    if (getOneNickNameSrcFromCache(id)) {
      setSrcFile(getOneNickNameSrcFromCache(id));
      return null;
    }

    while (!file) {
      const randomNum = random(nickNameList.length);
      file = nickNameList[randomNum];
    }

    setSrcFile(`audio_nick/${file}`);
    setOneNickNameSrcToCache({ id, src: `audio_nick/${file}` });
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
