import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import AudioControl from './audio_control';
import EmptyMenu from './empty_menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AudioLabel from './audio_label';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <MyPopover buttonText="設置" ButtonIconComponent={SettingsIcon}>
          <DeviceSelection {...props} isSetCookie />
          <VoiceTypeSelection {...props} isSetCookie />
        </MyPopover>
        <EmptyMenu />
        <AudioLabel {...props} />
        <AudioControl {...props} />
      </div>
    </div>
  </Fragment>
)

export default MenuBar;
