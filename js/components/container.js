import React, { useState } from 'react';
import VoiceTypeSelection from './voice_type_selection';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';

const Container = () => {
  const [voiceType, setVoiceType] = useState('FEMALE');
  
  
  return <div>
    <MenuBar voiceType={voiceType} setVoiceType={setVoiceType} />
    <PhraseButtons voiceType={voiceType} />
  </div>
}

export default Container;