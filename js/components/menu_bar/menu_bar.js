import React from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import SettingsIcon from '@material-ui/icons/Settings';
import AudioControl from './audio_control';
import Paper from '@material-ui/core/Paper';

const MenuBar = (props) => (
  <Paper elevation={3} className="menu-bar">
    <MyPopover buttonText="設置" ButtonIconComponent={SettingsIcon}>
      <DeviceSelection {...props} isSetCookie />
      <VoiceTypeSelection {...props} isSetCookie />
    </MyPopover>
    <AudioControl {...props} />
  </Paper>
)

export default MenuBar;
