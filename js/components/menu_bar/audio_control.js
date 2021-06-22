import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { attachSinkId } from '../../utils/audio_utils';

const AudioControl = ({ currentAudio, currentDeviceId }) => (
  <AudioPlayer
    src={currentAudio}
    autoPlayAfterSrcChange={true}
    customAdditionalControls={[]}
    onPlay={e => {
      console.log(e);
      attachSinkId({ element: e.target, sinkId: currentDeviceId })
    }}
  />
)

export default AudioControl;
