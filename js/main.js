/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';
import PhraseButtons from './phrase_buttons.js';
import ReactDOM from 'react-dom';
import React from 'react';

const init = () => {
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
  ReactDOM.render(
    <PhraseButtons />, document.querySelector(".dynamic-phrases-boxes")
  );
}

const phraseButtons = () => document.querySelectorAll('button.phrase');
phraseButtons().forEach(button => {
  button.addEventListener('click', () => {
    const audio = button.nextElementSibling;
    audio.volume = 1;
    console.log('Audio lowered to reduce feedback from local gUM stream');

    audio.play();
  });
})

function gotDevices(deviceInfos) {
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

  // Clone the master outputSelector and replace outputSelector placeholders.
  const allOutputSelectors = getAudioSelectElements();
  for (let selector = 0; selector < allOutputSelectors.length; selector++) {
    const newOutputSelector = masterOutputSelector.cloneNode(true);
    newOutputSelector.addEventListener('change', changeAudioDestination);
    allOutputSelectors[selector].parentNode.replaceChild(
      newOutputSelector,
      allOutputSelectors[selector]
    );
  }

  useDefaultDevice();
}

// Attach audio output device to the provided media element using the deviceId.
function attachSinkId(element, sinkId) {
  if (typeof element.sinkId !== 'undefined') {
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
          // Jump back to first output device in the list as it's the default.
          getAudioSelectElement().selectedIndex = 0;
        });
  } else {
    console.warn('Browser does not support output device selection.');
  }
}

function changeAudioDestination(event) {
  const deviceId = event.target.value;

  setDeviceIdToCookie(deviceId);
  chooseDeviceForAllAudio(deviceId);
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

const getAudioSelectElement = () => (
  getAudioSelectElements()[0]
)

const getAudioSelectElements = () => (
  document.querySelectorAll('select')
)

const setDeviceIdToCookie = (deviceId) => {
  const _deviceId = deviceId || getAudioSelectElement().value
  let expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  document.cookie = `deviceId=${_deviceId};expires=${expirationDate.toUTCString()};`;
}

const getDeviceIdFromCookie = () => {
  const deviceKeyPair = document.cookie && document.cookie.split(';')[0];
  return deviceKeyPair.split('=')[1];
}

const chooseDeviceForAllAudio = (deviceId) => {
  const elements = document.querySelectorAll('audio');
  elements.forEach(element => {
    attachSinkId(element, deviceId);
  })
}

const useDefaultDevice = () => {
  const deviceId = getDeviceIdFromCookie();
  if (deviceId) {
    getAudioSelectElement().value = deviceId;
    chooseDeviceForAllAudio(deviceId);
  } else {
    getAudioSelectElement().selectedIndex = 0;
  }
}

init();
