import React, { useEffect, useState, useRef } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import truncate from 'lodash/truncate';
import { makeStyles } from '@material-ui/core/styles';
import split from 'lodash/split';
import random from 'lodash/random';


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
}) => {
  const truncateTtp = truncate(ttp, { length: 2000 });
  const [ttpText, setTtpText] = useState(truncateTtp);
  const [srcFile, setSrcFile] = useState(src);
  const [nickNameList, setNickNameList] = useState([]);
  const buttonHandler = e => {
    const audioSrc = e.target.nextElementSibling.src;

    setCurrentAudio(audioSrc);
    setCurrentAudioId(phraseKey);
  }
  const classes = useStyles();
  const buttonClassName = highlight ? 'phrase highlight' : 'phrase';

  useEffect(() => {
    if (ttpFile) {
      fetch(ttpFile)
        .then(r => r.text())
        .then(text => setTtpText(truncate(text, { length: 2000 })));
    }
  }, [])

  useEffect(() => {
    if (nickNameFile && !nickNameList.length) {
      console.log('fetch nick name file global nickName');

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
    if (nickNameFile && nickNameList.length && !srcFile) {
      const randomNum = random(nickNameList.length);
      setSrcFile(`audio_nick/${nickNameList[randomNum]}`);

      console.log('nickName', nickNameList[randomNum]);
    }
  }, [nickNameList])

  return <div className="box">
    <Tooltip
      title={<span style={{ fontSize: "min(1.8vmax, 13px)"}}>{phraseKey} {ttpText}</span>}
      classes={{ tooltip: classes.tooltip }}
    >
      <button className={buttonClassName} onClick={buttonHandler}>
        {text}
      </button>
    </Tooltip>
    <audio preload="auto" src={srcFile}></audio>
  </div>
}

export default Button
