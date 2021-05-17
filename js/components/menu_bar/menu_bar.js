import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import SideBar from './side_bar'
import VoiceTypeSelection from './voice_type_selection'

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <DeviceSelection />
        <VoiceTypeSelection {...props} />
      </div>
    </div>
    <SideBar {...props} />
  </Fragment>
)

export default MenuBar;