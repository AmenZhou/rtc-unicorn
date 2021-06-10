import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import AudioControl from './audio_control';
import PopupLongevity from '../popup_longevity';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <MyPopover buttonText="設置">
          <DeviceSelection {...props} />
          <VoiceTypeSelection {...props} />
        </MyPopover>
        <PopupLongevity buttonTextOpen="打開播放器" buttonTextClose="關閉播放器">
          <AudioControl {...props} />
        </PopupLongevity>
      </div>
    </div>
  </Fragment>
)

export default MenuBar;