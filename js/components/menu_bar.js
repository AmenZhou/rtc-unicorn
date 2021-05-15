import React from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'

const MenuBar = (props) => (
  <div className="menu-bar">
    <DeviceSelection />
    <VoiceTypeSelection {...props} />
  </div>
)

export default MenuBar;