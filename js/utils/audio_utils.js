import filter from 'lodash/filter';

export const attachSinkId = ({ element, sinkId }) => {
  element.setSinkId(sinkId)
    .then(() => {
      console.log(`Success, audio output device attached: ${sinkId} to element with ${element.title} as source.`);
    })
    .catch(error => {
      let errorMessage = error;
      if (error.name === 'SecurityError') {
        errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
      }
      console.error(errorMessage);
    });
}

export const noAudioOutput = deviceInfos => {
  const outputDevices = audioOutput(deviceInfos);

  return !outputDevices || !outputDevices.length
}

export const audioOutput = deviceInfos =>
  deviceInfos && deviceInfos.length && filter(deviceInfos, device => device.kind == 'audiooutput')
