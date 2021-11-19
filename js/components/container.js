import React, { useEffect, useState, useCallback } from 'react';
import PhraseButtons from './phrase_buttons';
import MenuBar from './menu_bar';
import { getMp3List } from '../utils/button_utils';
import { getDeviceIdFromCookie, getVoiceTypeFromCookie, needToSetCookie } from '../utils/cookie_utils';
import MyAlertDialog from './common/my_alert_dialog';
import SettingsPopUp from './settings_pop_up';
import { readJsonFile } from '../utils/common_utils';

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
  const loadButtonMap = useCallback(() => {
    if (!buttonMap.length)
      readJsonFile({ filePath: 'config/index_key_name_map_short.json', setFunc: setButtonMap });
  }, []);

  const loadMp3List = useCallback(async () => {
    await getMp3List({ voiceType, setMp3List });
  }, [voiceType]);


  useEffect(() => {
    loadButtonMap();
  }, [loadButtonMap]);

  useEffect(() => {
    loadMp3List();
  }, [loadMp3List])

  if (showError)
    return <MyAlertDialog
      title="請注意"
      body="無法檢測到語音設備。請使用Chrome瀏覽器，並且給予瀏覽器權限。"
      open
    />

  return <div>
    {(needToSetCookie() || openSettings)
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
