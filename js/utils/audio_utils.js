import { setDeviceIdToCookie, getDeviceIdFromCookie } from "./cookie_utils";

export const attachSinkId = (element) => {
  if (typeof element.sinkId !== 'undefined') {
    element.setSinkId(sinkId())
        .then(() => {
          console.log(`Success, audio output device attached: ${sinkId()} to element with ${element.title} as source.`);
        })
        .catch(error => {
          let errorMessage = error;
          if (error.name === 'SecurityError') {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Jump back to first output device in the list as it's the default.
          getAudioSelectElement().selectedIndex = 0;
        });
  } else {
    console.warn('Browser does not support output device selection.');
  }
}

export const gotDevices = (deviceInfos) => {
  const masterOutputSelector = document.createElement('select');

  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'audiooutput') {
      console.info('Found audio output device: ', deviceInfo.label);
      option.text = deviceInfo.label || `speaker ${masterOutputSelector.length + 1}`;
      masterOutputSelector.appendChild(option);
    } else {
      console.log('Found non audio output device: ', deviceInfo.label);
    }
  }

  const newOutputSelector = masterOutputSelector.cloneNode(true);
  newOutputSelector.addEventListener('change', changeAudioDestination);
  getAudioSelectElement().parentNode.replaceChild(
    newOutputSelector,
    getAudioSelectElement()
  );

  useDefaultDevice()
}

const changeAudioDestination = event => {
  const deviceId = event.target.value;

  setDeviceIdToCookie(deviceId);
}

const sinkId = () => (
  getAudioSelectElement().value
)

const getAudioSelectElement = () => (
  document.querySelector('select')
)

const useDefaultDevice = () => {
  const deviceId = getDeviceIdFromCookie();
  if (deviceId) {
    getAudioSelectElement().value = deviceId;
    chooseDeviceForAllAudio(deviceId);
  } else {
    getAudioSelectElement().selectedIndex = 0;
  }
}