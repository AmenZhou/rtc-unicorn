import React from 'react'
import DeviceSelection from './device_selection'
import GroupSelection from './group_selection'
import VoiceTypeSelection from './voice_type_selection'

const MenuBar = (props) => (
  <div className="menu-bar">
    <div className='menu-row'>
      <DeviceSelection />
      <VoiceTypeSelection {...props} />
    </div>
    <div className='menu-row'>
      <GroupSelection {...props} />
    </div>
  </div>
)

export default MenuBar;