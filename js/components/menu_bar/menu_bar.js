import React from 'react'
import DeviceSelection from './device_selection'
import GroupSelection from './group_selection'
import VoiceTypeSelection from './voice_type_selection'

const MenuBar = ({ voiceType, setVoiceType, mp3List }) => (
  <div className="menu-bar">
    <div className='menu-row'>
      <DeviceSelection />
      <VoiceTypeSelection voiceType={voiceType} setVoiceType={setVoiceType} />
    </div>
    <div className='menu-row'>
      <GroupSelection mp3List={mp3List} />
    </div>
  </div>
)

export default MenuBar;