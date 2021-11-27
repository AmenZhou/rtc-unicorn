import React, { useEffect, useState, useCallback } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';
import { getDeviceIdFromCookie, getVoiceTypeFromCookie, needToSetCookie } from '../utils/cookie_utils';
import MyAlertDialog from './common/my_alert_dialog';
import SettingsPopUp from './settings_pop_up';
import { readJsonFile } from '../utils/common_utils';
import { audioOutput, noAudioOutput } from '../utils/audio_utils';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = () => {
  const defaultVoiceType = getVoiceTypeFromCookie() || 'FEMALE';
  const defaultDeviceId = getDeviceIdFromCookie() || 'default';
  const [voiceType, setVoiceType] = useState(defaultVoiceType);
  const [selectedGroup, setGroup] = useState('ALL');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [mp3List, setMp3List] = useState([]);
  const [deviceInfos, setDeviceInfos] = useState([]);
  const [currentDeviceId, setCurrentDeviceId] = useState(defaultDeviceId);
  const [buttonMap, setButtonMap] = useState([]);
  const [currentAudioId, setCurrentAudioId] = useState(null);
  const [showError, setShowError] = useState(false);
  const [refreshNickName, setRefreshNickName] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  // const [loading, setLoading] = useState(true);
  const loadButtonMap = useCallback(() => {
    if (!buttonMap.length)
      readJsonFile({ filePath: 'config/index_key_name_map_short.json', setFunc: setButtonMap });
  }, []);
  // const deviceLoadFail = () => {
  //   setShowError(true);
  //   setLoading(false);
  // }

  const loadMp3List = useCallback(async () => {
    await getMp3List({ voiceType, setMp3List });
  }, [voiceType]);


  useEffect(() => {
    loadButtonMap();
  }, [loadButtonMap]);

  useEffect(() => {
    loadMp3List();
  }, [loadMp3List])

  useEffect(() => {
    if (deviceInfos.length)
      return;

    if (global.deviceInfosCache.length) {
      setDeviceInfos(global.deviceInfosCache)
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(() =>
        navigator.mediaDevices.enumerateDevices().then(devices => {
          if (!noAudioOutput(devices)) {
            const outputDevices = audioOutput(devices);

            console.log(deviceInfos, 'deviceInfos')
            setDeviceInfos(outputDevices);
            global.deviceInfosCache = outputDevices;
          }
        }).catch(_=> console.error('Can not get device info'))
      ).catch(_=> console.error('Can not get device info'));
    }
  }, [])

  return <div>
    {(needToSetCookie({ deviceInfos }) || openSettings)
      && <SettingsPopUp
          deviceInfos={deviceInfos}
          setCurrentDeviceId={setCurrentDeviceId}
          currentDeviceId={currentDeviceId}
          voiceType={voiceType}
          setVoiceType={setVoiceType}
          setOpenSettings={setOpenSettings}
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
      currentAudioId={currentAudioId}
      setOpenSettings={setOpenSettings}
    />
    <PhraseButtons
      mp3List={mp3List}
      selectedGroup={selectedGroup}
      setCurrentAudio={setCurrentAudio}
      buttonMap={buttonMap}
      setCurrentAudioId={setCurrentAudioId}
      currentAudioId={currentAudioId}
      currentAudio={currentAudio}
      currentDeviceId={currentDeviceId}
      refreshNickName={refreshNickName}
      setRefreshNickName={setRefreshNickName}
    />
  </div>
}

export default Container;
