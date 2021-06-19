import React, { useEffect, useState } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';
import { getDeviceIdFromCookie, getVoiceTypeFromCookie } from '../utils/cookie_utils';

const Container = () => {
  const defaultVoiceType = getVoiceTypeFromCookie() || 'FEMALE';
  const [voiceType, setVoiceType] = useState(defaultVoiceType);
  const [selectedGroup, setGroup] = useState('ALL');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [mp3List, setMp3List] = useState([]);
  const [deviceInfos, setDeviceInfos] = useState(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(getDeviceIdFromCookie())

  useEffect(() => {
    getMp3List({ voiceType, setMp3List });
  }, [voiceType])

  useEffect(() => {
    if (!deviceInfos)
      navigator.mediaDevices.enumerateDevices().then(setDeviceInfos);
  }, [])

  return <div>
    <MenuBar
      voiceType={voiceType}
      setVoiceType={setVoiceType}
      mp3List={mp3List}
      setGroup={setGroup}
      selectedGroup={selectedGroup}
      currentAudio={currentAudio}
      deviceInfos={deviceInfos}
      currentDeviceId={currentDeviceId}
      setCurrentDeviceId={setCurrentDeviceId}
    />
    <PhraseButtons
      mp3List={mp3List}
      selectedGroup={selectedGroup}
      setCurrentAudio={setCurrentAudio}
    />
  </div>
}

export default Container;