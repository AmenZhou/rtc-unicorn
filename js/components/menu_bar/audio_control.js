import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { attachSinkId } from '../../utils/audio_utils';
import AudioLabel from './audio_label';

const AudioControl = ({ currentAudio, currentDeviceId, currentAudioId, mp3List }) => (
  <div className="audio-bar">
    <AudioLabel currentAudioId={currentAudioId} mp3List={mp3List} />
    <AudioPlayer
      src={currentAudio}
      autoPlayAfterSrcChange={true}
      customAdditionalControls={[]}
      onPlay={e => {
        console.log(e);
        attachSinkId({ element: e.target, sinkId: currentDeviceId })
      }}
    />
  </div>
)

export default AudioControl;
