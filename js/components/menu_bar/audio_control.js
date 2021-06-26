import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { attachSinkId } from '../../utils/audio_utils';
import Paper from '@material-ui/core/Paper';
import AudioLabel from './audio_label';

const AudioControl = ({ currentAudio, currentDeviceId, currentAudioId, mp3List }) => (
  <Paper elevation={3} className="audio-bar">
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
  </Paper>
)

export default AudioControl;
