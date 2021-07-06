import React from 'react'
import Button from './button';
import { randomKey } from '../utils/common_utils';

const ButtonGroup = ({
  indexLetter,
  buttons,
  setCurrentAudio,
  buttonMap,
  setCurrentAudioId,
  setRefreshNickName,
  refreshNickName
}) => (
  <div className="group" key={indexLetter}>
    <div className="index-letter-box">{buttonMap[indexLetter.toUpperCase()]}</div>
    {
      buttons.map(({ src, title, id, key, ttp, ttp_file, highlight, nick_name_file, refresh_nick_name }) =>
        <Button
          key={randomKey()}
          phraseKey={key}
          id={id}
          src={src}
          text={title}
          ttp={ttp}
          ttpFile={ttp_file}
          setCurrentAudio={setCurrentAudio}
          highlight={highlight}
          setCurrentAudioId={setCurrentAudioId}
          nickNameFile={nick_name_file}
          refreshNickName={refreshNickName}
          setRefreshNickName={setRefreshNickName}
          isRefreshNickNameButton={refresh_nick_name}
        />
      )
    }
  </div>
)

export default ButtonGroup;
