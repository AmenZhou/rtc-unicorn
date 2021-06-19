/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';
import ReactDOM from 'react-dom';
import React from 'react';
import Container from './components/container.js';
import '../css/main.css';

const init = () => {
  ReactDOM.render(
    <Container />, document.querySelector("#react_entry")
  );
}

global.currentAudioElement;
global.currentSinkId;

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

init();
