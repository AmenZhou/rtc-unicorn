import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Button from '@material-ui/core/Button';

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

  return <Button variant="outlined" size="small" color="primary"><MusicNoteIcon />{audioTitle}</Button>;
}

export default AudioLabel;
