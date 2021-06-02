import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { attachSinkId } from '../../utils/audio_utils';

const AudioControl = ({ currentAudio }) => (
  <AudioPlayer
    src={currentAudio}
    autoPlayAfterSrcChange={true}
    customAdditionalControls={[]}
    onPlay={e => {console.log(e);attachSinkId(e.target)}}
  />
)

export default AudioControl;