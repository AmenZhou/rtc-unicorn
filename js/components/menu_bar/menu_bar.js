import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import EmptyMenu from './empty_menu';
import SettingsIcon from '@material-ui/icons/Settings';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <MyPopover buttonText="設置" ButtonIconComponent={SettingsIcon}>
          <DeviceSelection {...props} isSetCookie />
          <VoiceTypeSelection {...props} isSetCookie />
        </MyPopover>
        <EmptyMenu />
      </div>
    </div>
  </Fragment>
)

export default MenuBar;
