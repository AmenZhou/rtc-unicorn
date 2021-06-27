import Cookies from 'js-cookie'
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';

export const getDeviceIdFromCookie = () => (
  Cookies.get('deviceId')
)

export const setDeviceIdToCookie = ({ deviceId, deviceInfos }) => {
  console.log(deviceId, 'setDeviceIdToCookie');
  if (validDeviceId({ deviceId, deviceInfos }))
    Cookies.set('deviceId', deviceId, { expires: 365 });
  else {
    console.error(deviceId, 'setDeviceIdToCookie wrong deviceId');
    Cookies.set('deviceId', 'default', { expires: 365 });
  }
}

export const setVoiceTypeToCookie = voiceType => (
  Cookies.set('voiceType', voiceType, { expires: 365 })
)

export const getVoiceTypeFromCookie = () => (
  Cookies.get('voiceType')
)

export const needToSetCookie = ({ deviceInfos }) => {
  if (!deviceInfos)
    return false

  if (isEmpty(getVoiceTypeFromCookie()))
    return true;

  if (isEmpty(getDeviceIdFromCookie()))
    return true;

  if (!find(deviceInfos, device => device.deviceId === getDeviceIdFromCookie()))
    return true

  return false;
};

export const validDeviceId = ({ deviceInfos, deviceId }) => (
  find(deviceInfos, device => device.deviceId === deviceId)
)
