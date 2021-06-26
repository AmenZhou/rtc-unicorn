import Cookies from 'js-cookie'
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';

export const getDeviceIdFromCookie = () => {
  const deviceKeyPair = document.cookie && document.cookie.split(';')[0];
  return deviceKeyPair.split('=')[1];
}

export const setDeviceIdToCookie = deviceId => {
  const _deviceId = deviceId || getAudioSelectElement().value
  let expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  document.cookie = `deviceId=${_deviceId};expires=${expirationDate.toUTCString()};`;
}

const getAudioSelectElement = () => (
  document.querySelector('select')
)

export const setVoiceTypeToCookie = voiceType => (
  Cookies.set('voiceType', voiceType, { expires: 365 })
)

export const getVoiceTypeFromCookie = () => (
  Cookies.get('voiceType')
)

export const needToSetCookie = ({ deviceInfos }) => {
  if (isEmpty(getVoiceTypeFromCookie()))
    return true;

  if (isEmpty(getDeviceIdFromCookie()))
    return true;

  console.log(getDeviceIdFromCookie(), "getDeviceIdFromCookie()");
  if (!find(deviceInfos, device => device.deviceId === getDeviceIdFromCookie()))
    return true

  return false;
};
