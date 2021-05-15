import React, { useState } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';

const Container = () => {
  const [voiceType, setVoiceType] = useState('FEMALE');
  const mp3List = getMp3List({ voiceType });
  
  return <div>
    <MenuBar voiceType={voiceType} setVoiceType={setVoiceType} mp3List={mp3List} />
    <PhraseButtons mp3List={mp3List} />
  </div>
}

export default Container;