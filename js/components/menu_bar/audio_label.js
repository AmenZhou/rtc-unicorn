import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Label = withStyles(_ => ({
  root: {
    flex: '1 0 auto'
  },
}))(Button);

const AudioLabel = ({ currentAudioId, mp3List }) => {
  if (!currentAudioId)
    return null;

  const currentAudio = mp3List.filter(mp3 => mp3.key === currentAudioId);

  if (currentAudio.length > 1)
    console.error(`There are 2 audios having the same key - ${currentAudio}`);

  if (currentAudio.length === 0) {
    console.error(`There is no audio associated with the key - ${currentAudioId}`);
    return null;
  }

  const audioTitle = currentAudio[0].title;

  return <Label variant="contained" size="small"><MusicNoteIcon />{audioTitle}</Label>;
}

export default AudioLabel;
