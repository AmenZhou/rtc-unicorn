import React, { useState } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';
import { getVoiceTypeFromCookie } from '../utils/cookie_utils';

const Container = () => {
  const defaultVoiceType = getVoiceTypeFromCookie() || 'FEMALE';
  const [voiceType, setVoiceType] = useState(defaultVoiceType);
  const [selectedGroup, setGroup] = useState('ALL');
  const mp3List = getMp3List({ voiceType });
  
  return <div>
    <MenuBar
      voiceType={voiceType}
      setVoiceType={setVoiceType}
      mp3List={mp3List}
      setGroup={setGroup}
      selectedGroup={selectedGroup}
    />
    <PhraseButtons mp3List={mp3List} selectedGroup={selectedGroup} />
  </div>
}

export default Container;