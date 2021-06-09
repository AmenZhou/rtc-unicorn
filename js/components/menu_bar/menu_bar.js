import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import SideBar from './side_bar';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <MyPopover buttonText="設置">
          <DeviceSelection {...props} />
          <VoiceTypeSelection {...props} />
        </MyPopover>
        <SideBar {...props} />
      </div>
    </div>
  </Fragment>
)

export default MenuBar;