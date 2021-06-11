import React, { Fragment } from 'react'
import DeviceSelection from './device_selection'
import VoiceTypeSelection from './voice_type_selection'
import MyPopover from '../my_popover';
import AudioControl from './audio_control';
import PopupLongevity from '../popup_longevity';
import EmptyMenu from './empty_menu';
import SettingsIcon from '@material-ui/icons/Settings';
import MusicIcon from '@material-ui/icons/MusicNote';
import CloseIcon from '@material-ui/icons/Close';

const MenuBar = (props) => (
  <Fragment>
    <div className="menu-bar">
      <div className='menu-row'>
        <MyPopover buttonText="設置" ButtonIconComponent={SettingsIcon}>
          <DeviceSelection {...props} />
          <VoiceTypeSelection {...props} />
        </MyPopover>
        <EmptyMenu />
        <PopupLongevity
          buttonTextOpen="播放器"
          buttonTextClose="播放器"
          IconOpen={MusicIcon}
          IconClose={CloseIcon}
        >
          <AudioControl {...props} />
        </PopupLongevity>
      </div>
    </div>
  </Fragment>
)

export default MenuBar;