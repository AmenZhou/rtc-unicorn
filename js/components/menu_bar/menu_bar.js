import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import Poper from '../poper';
import AudioControl from './audio_control';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <Poper buttonText="設置">
          <DeviceSelection {...props} />
          <VoiceTypeSelection {...props} />
        </Poper>
        <div className="menu-title">講真相語音點播系統</div>
        <Poper buttonText="語音播放器">
          <AudioControl {...props} />
        </Poper>
      </div>
    </div>
  </Fragment>
)

export default MenuBar;