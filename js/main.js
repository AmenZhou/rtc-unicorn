/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';
import PhraseButtons from './components/phrase_buttons.js';
import ReactDOM from 'react-dom';
import React from 'react';
import { gotDevices } from './utils/audio_utils';

const init = () => {
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
  ReactDOM.render(
    <PhraseButtons />, document.querySelector(".dynamic-phrases-boxes")
  );
}

global.currentAudioElement;

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

init();
