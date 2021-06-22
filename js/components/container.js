import React, { useEffect, useState } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';
import { getDeviceIdFromCookie, getVoiceTypeFromCookie, needToSetCookie } from '../utils/cookie_utils';
import MyAlertDialog from './common/my_alert_dialog';
import isEmpty from 'lodash/isEmpty';
import FirstTimeSetup from './first_time_setup';

const Container = () => {
  const defaultVoiceType = getVoiceTypeFromCookie() || 'FEMALE';
  const defaultDeviceId = getDeviceIdFromCookie() || 'Default';
  const [voiceType, setVoiceType] = useState(defaultVoiceType);
  const [selectedGroup, setGroup] = useState('ALL');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [mp3List, setMp3List] = useState([]);
  const [deviceInfos, setDeviceInfos] = useState(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(defaultDeviceId);
  const deviceInfoNotFound = () => !deviceInfos || deviceInfos.filter(device => !isEmpty(device.deviceId)).length === 0;

  useEffect(() => {
    getMp3List({ voiceType, setMp3List });
  }, [voiceType])

  useEffect(() => {
    if (!deviceInfos)
      navigator.mediaDevices.getUserMedia({audio: true}).then(() =>
        navigator.mediaDevices.enumerateDevices().then(setDeviceInfos)
      );
  }, [])

  console.log(deviceInfos, 'deviceInfos')

  if (deviceInfoNotFound())
    return <MyAlertDialog title="請注意" body="無法檢測到語音設備。請使用Chrome瀏覽器，並且給予瀏覽器權限。" open/>

  return <div>
    {needToSetCookie()
      && <FirstTimeSetup
          deviceInfos={deviceInfos}
          setCurrentDeviceId={setCurrentDeviceId}
          currentDeviceId={currentDeviceId}
          voiceType={voiceType}
          setVoiceType={setVoiceType}
        />
    }
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
