import React from 'react';
import ButtonGroup from './button_group';
import { audioManufacture } from '../utils/button_utils';
import { randomKey } from '../utils/common_utils';
import AudioControl from './menu_bar/audio_control';

const PhraseButtons = props => {
  const { mp3List, selectedGroup, setCurrentAudio, buttonMap, setCurrentAudioId, setRefreshNickName, refreshNickName } = props;

  return <div className="phrase-buttons">
    <AudioControl {...props} />
    {
      audioManufacture(mp3List).filter(({ indexLetter }) => {
        if(selectedGroup === 'ALL') return true;
        return selectedGroup === indexLetter
      }).map(({ indexLetter, buttonGroup }) => (
        <ButtonGroup
          indexLetter={indexLetter}
          buttons={buttonGroup}
          setCurrentAudio={setCurrentAudio}
          key={randomKey()}
          buttonMap={buttonMap}
          setCurrentAudioId={setCurrentAudioId}
          setRefreshNickName={setRefreshNickName}
          refreshNickName={refreshNickName}
        />
      ))
    }
  </div>
}

export default PhraseButtons;
