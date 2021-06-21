import React from 'react';
import MyAlertDialog from './common/my_alert_dialog';
import DeviceSelection from './menu_bar/device_selection';
import VoiceTypeSelection from './menu_bar/voice_type_selection';
import { getDeviceIdFromCookie, getVoiceTypeFromCookie, setDeviceIdToCookie, setVoiceTypeToCookie } from '../utils/cookie_utils';

const FirstTimeSetup = props => {
  const buttonHandler = _ => {
    const { voiceType, currentDeviceId } = props;

    if (!getDeviceIdFromCookie())
      setDeviceIdToCookie(currentDeviceId);

    if (!getVoiceTypeFromCookie())
      setVoiceTypeToCookie(voiceType);
  }

  return <MyAlertDialog
    title="請先選擇正確的語音設備，和男女聲設置。"
    buttonText="Ok"
    buttonHandler={buttonHandler}
    open
  >
    <DeviceSelection {...props} />
    <VoiceTypeSelection {...props} />
  </MyAlertDialog>
}

export default FirstTimeSetup;