import React from 'react'
import AudioControl from './audio_control';
import Paper from '@material-ui/core/Paper';
import SettingButton from './setting_button';

const MenuBar = (props) => (
  <Paper elevation={3} className="menu-bar">
    <SettingButton {...props} />
    <AudioControl {...props} />
  </Paper>
)

export default MenuBar;
