import React from 'react';
import MyAlertDialog from './common/my_alert_dialog';
import VoiceTypeSelection from './menu_bar/voice_type_selection';
import { setDeviceIdToCookie, setVoiceTypeToCookie } from '../utils/cookie_utils';

const FirstTimeSetup = props => {
  const buttonHandler = _ => {
    const { voiceType, currentDeviceId, deviceInfos, setOpenSettings } = props;

    setDeviceIdToCookie({ deviceId: currentDeviceId, deviceInfos });
    setVoiceTypeToCookie(voiceType);
    setOpenSettings(false);
  }

  return <MyAlertDialog
    title="請先選擇男女聲設置。"
    buttonText="Ok"
    buttonHandler={buttonHandler}
    open
  >
    <VoiceTypeSelection {...props} />
  </MyAlertDialog>
}

export default FirstTimeSetup;
